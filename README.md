Markdown
# 🚀 Dev Stack — Development Stack Builder

> A responsive React website that helps developers explore technologies and build a personal development stack. The UI follows the supplied design reference with a clean white layout, orange → pink → violet gradient branding, technology cards, and a responsive stack sidebar.

![Hero Stack Banner](public/assets/hero-stack.png)

---

## 📋 Table of Contents
- [✨ Key Features](#-key-features)
- [🛠️ Technologies & Dependencies](#️-technologies--dependencies)
- [📁 Project Structure](#-project-structure)
- [🎨 Design Notes](#-design-notes)
- [⚙️ Getting Started & Local Setup](#️-getting-started--local-setup)
- [🔗 Links & Live Demo](#-links--live-demo)
- [💡 React Questions & Answers](#-react-questions--answers)
- [📄 License](#-license)

---

## ✨ Key Features

1. **Dynamic Tech Exploration & Selection:** Browse through 12 technologies fetched dynamically from a separate JSON file (`technologies.json`). Add items to your stack with visual state indicators and hover feedback (duplicate additions are safely prevented).
2. **Real-time Stack Management:** View and manage your selected stack in a dedicated responsive sidebar panel with options to remove individual technologies or clear the entire stack at once with instant notifications.
3. **Responsive UI & Loading States:** Clean, responsive design featuring custom brand gradients, a mobile hamburger menu, interactive card interactions, and smooth loading spinners.
4. **Toast Notifications:** Integrated using `React-Toastify` to provide instant alerts for add, duplicate, remove, and remove-all actions.

---

## 🛠️ Technologies & Dependencies

### Core Technologies Used
* **React.js**
* **JavaScript (ES6+)**
* **Vite**
* **CSS3**
* **JSON**

### Project Dependencies
* `react` / `react-dom`
* `react-toastify`

---

## 📁 Project Structure

```text
dev-stack-builder/
├── public/
│   ├── assets/
│   │   ├── hero-stack.png
│   │   └── logo-text.png
│   └── data/
│       └── technologies.json
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── StackPanel.jsx
│   │   └── TechnologyCard.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── README.md
🎨 Design Notes
The shared brand gradient is defined once globally in src/index.css:

CSS
:root {
  --brand-gradient: linear-gradient(90deg, #ff6b22 0%, #ef2779 52%, #8e2de2 100%);
}
The same CSS variable is used for the brand treatment, hero highlight, and primary buttons, ensuring the theme can be easily managed and updated from a single place.

⚙️ Getting Started & Local Setup
Follow these steps to run the project locally on your machine:

1. Clone the Repository
Bash
git clone [https://github.com/your-username/dev-stack-builder.git](https://github.com/your-username/dev-stack-builder.git)
cd dev-stack-builder
2. Install Dependencies
Bash
npm install
3. Run the Development Server
Bash
npm run dev
Open your browser and visit http://localhost:5173 (or the local URL provided in your terminal).

🔗 Links & Live Demo
Live Demo: View Live Site

GitHub Repository: View Repository

💡 React Questions & Answers
1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like UI inside JavaScript. React uses JSX because it makes component structure easier to read and build.

2. What is the difference between props and state?
Props are data passed into a component by its parent. State is data owned and managed by a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?
useState creates state in a React component. I used it for the technology list, selected stack, loading status, and mobile menu state.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs side effects after rendering. I used it to fetch technologies.json when the app loads.

5. Why does every item in a .map() list need a unique key prop?
React uses the key to identify each list item between renders. A unique key helps React update only the items that changed.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition. In the stack panel, an empty-stack message is shown when stack.length === 0; otherwise the selected technologies are shown.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent sends data through props, such as technology and isAdded to TechnologyCard. The child can send information back by calling a callback function passed as a prop, such as onAdd(technology).

📄 License
This project is open-source and available under the MIT License
