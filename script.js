document.getElementById("optimize").addEventListener("click", () => {
  const input = document.getElementById("expression").value.trim();
  if (!input) return alert("Please enter an expression!");

  const beforeTree = buildExpressionTree(input);
  document.getElementById("tree-before").textContent = renderTree(beforeTree);

  const optimizedTree = constantFoldTree(beforeTree);
  document.getElementById("tree-after").textContent = renderTree(optimizedTree);

  const optimizedExpr = treeToString(optimizedTree);
  document.getElementById("optimized").textContent = optimizedExpr;

  try {
    if (!/[a-zA-Z]/.test(optimizedExpr)) {
      document.getElementById("result").textContent = eval(optimizedExpr);
    } else {
      document.getElementById("result").textContent = "Contains variables — cannot fully evaluate.";
    }
  } catch {
    document.getElementById("result").textContent = "Invalid expression!";
  }
});

// --- Expression Tree Builder ---
function buildExpressionTree(expr) {
  expr = expr.replace(/\s+/g, '');
  const operators = ['+', '-', '*', '/'];

  function parseExpression(expression) {
    if (expression.startsWith('(') && expression.endsWith(')')) {
      const inner = expression.slice(1, -1);
      if (isBalanced(inner)) return parseExpression(inner);
    }
    for (let op of ['+', '-', '*', '/']) {
      let idx = findOperatorOutsideParentheses(expression, op);
      if (idx !== -1) {
        return {
          op,
          left: parseExpression(expression.slice(0, idx)),
          right: parseExpression(expression.slice(idx + 1))
        };
      }
    }
    return { value: expression };
  }

  return parseExpression(expr);
}

function isBalanced(str) {
  let bal = 0;
  for (let ch of str) {
    if (ch === '(') bal++;
    if (ch === ')') bal--;
    if (bal < 0) return false;
  }
  return bal === 0;
}

function findOperatorOutsideParentheses(expr, op) {
  let depth = 0;
  for (let i = expr.length - 1; i >= 0; i--) {
    if (expr[i] === ')') depth++;
    else if (expr[i] === '(') depth--;
    else if (depth === 0 && expr[i] === op) return i;
  }
  return -1;
}

// --- Constant Folding ---
function constantFoldTree(node) {
  if (!node.op) return node;

  const left = constantFoldTree(node.left);
  const right = constantFoldTree(node.right);

  if (left.value && right.value &&
      !/[a-zA-Z]/.test(left.value) &&
      !/[a-zA-Z]/.test(right.value)) {
    const folded = eval(`${left.value}${node.op}${right.value}`);
    return { value: String(folded) };
  }

  return { op: node.op, left, right };
}

// --- Convert tree back to string ---
function treeToString(node) {
  if (node.value) return node.value;
  return `(${treeToString(node.left)}${node.op}${treeToString(node.right)})`;
}

// --- Render Tree ---
function renderTree(node, prefix = '', isLeft = true) {
  if (!node) return '';
  let result = '';
  if (node.right) result += renderTree(node.right, prefix + (isLeft ? '│   ' : '    '), false);
  result += prefix + (isLeft ? '└── ' : '┌── ') + (node.op || node.value) + '\\n';
  if (node.left) result += renderTree(node.left, prefix + (isLeft ? '    ' : '│   '), true);
  return result;
}
