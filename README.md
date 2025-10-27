# 🔧 Constant Folding Optimizer + Expression Tree Visualizer

A simple **JavaScript-based compiler optimization demo** that performs **constant folding** on arithmetic expressions and visualizes the **expression tree before and after optimization**.

🚀 **Live Demo:** [constant-folding-optimizer.vercel.app](https://constant-folding-optimizer.vercel.app/)

---

## 🌟 Features

- 🧮 **Constant Folding Optimization**  
  Automatically evaluates constant subexpressions at compile time.  
  Example:  
2 + 3 * 4 + x ➜ 14 + x

yaml
Copy code

- 🌳 **Expression Tree Visualization**  
View the syntax tree **before** and **after** optimization.

- ⚡ **Instant Evaluation**  
If the expression contains no variables, the result is immediately evaluated.

- 💻 **Lightweight Frontend Project**  
Built entirely with **HTML**, **CSS**, and **Vanilla JavaScript** — no frameworks.

---

## 🧠 What is Constant Folding?

Constant folding is a **compiler optimization** that replaces constant expressions with their precomputed results **at compile time** rather than at runtime.

Example:
```text
Input:   (2 + 3) * 4
Output:  20
This improves performance and reduces redundant calculations in generated code.

📂 Project Structure
bash
Copy code
constant-folding-optimizer/
│
├── index.html        # Main HTML page
├── style.css         # Styling and layout
└── script.js         # Constant folding and tree visualization logic
🛠️ Installation & Local Setup
Clone this repository

bash
Copy code
git clone https://github.com/<your-username>/constant-folding-optimizer.git
cd constant-folding-optimizer
Open locally

Just open index.html in your browser — no build tools required.

(Optional) Deploy to Vercel

bash
Copy code
npm i -g vercel
vercel
🧩 How It Works
The user enters an arithmetic expression.

A small parser converts it into an expression tree.

The optimizer recursively evaluates any subexpressions with only constants.

The updated tree is displayed alongside the original one.

📸 Preview
Before	After

(Replace with actual screenshots once available.)

👨‍💻 Technologies Used
HTML5 – structure

CSS3 – styling and layout

JavaScript (ES6) – expression parsing, evaluation, and visualization

🧰 Example Inputs
Input Expression	Optimized Output	Result
2 + 3 * 4	14	14
(10 / 2) + x * 3	5 + x * 3	Contains variable
2 * (3 + 4)	14	14

📜 License
This project is licensed under the MIT License — feel free to use, modify, and share.

👏 Acknowledgements
Created with ❤️ to demonstrate basic compiler optimization concepts using simple web technologies.

yaml
Copy code

---

Would you like me to make this README **Markdown-styled for GitHub (with emojis, badges, etc.)**, o
