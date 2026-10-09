# 🚀 Dev Stack — Development Stack Builder

> A responsive React application designed to help developers explore modern technologies and build their custom personal development stacks on the fly.

![Banner](public/assets/hero-stack.png)

---

## 📋 Table of Contents
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack & Dependencies](#️-tech-stack--dependencies)
- [📁 Project Structure](#-project-structure)
- [🎨 Design & Styling](#-design--styling)
- [⚙️ Getting Started (Local Setup)](#️-getting-started-local-setup)
- [💡 React Concepts & Architecture Q&A](#-react-concepts--architecture-qa)
- [🔗 Links & Live Demo](#-links--live-demo)
- [📄 License](#-license)

---

## ✨ Key Features

1. **Dynamic Tech Exploration & Selection:** Browse through technologies fetched dynamically from a local JSON file. Add items to your stack with visual state indicators and hover feedback (duplicate additions are safely prevented).
2. **Real-time Stack Management:** View and manage your selected stack in a dedicated sidebar panel with options to remove individual technologies or clear the entire stack at once.
3. **Responsive UI & Loading States:** Clean, modern design featuring custom brand gradients, a mobile hamburger menu, interactive card interactions, and smooth loading spinners.
4. **Toast Notifications:** Powered by `react-toastify` to provide instant feedback for add, duplicate, remove, and clear-all actions.

---

## 🛠️ Tech Stack & Dependencies

### Core Technologies
* **React.js** (v18+)
* **JavaScript (ES6+)**
* **Vite** (Lightning-fast build tool)
* **CSS3** (Custom properties & modern flexbox/grid layouts)

### Dependencies
* `react` / `react-dom`
* `react-toastify` (For sleek UI alert notifications)

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
🎨 Design & Styling
The shared brand gradient is defined globally in src/index.css:

CSS
:root {
  --brand-gradient: linear-gradient(90deg, #ff6b22 0%, #ef2779 52%, #8e2de2 100%);
}
This variable is consistently utilized across the brand treatment, hero highlights, primary buttons, and interactive borders to ensure unified theme management from a single source of truth.

⚙️ Getting Started (Local Setup)
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
Open your browser and navigate to http://localhost:5173 (or the port specified in your terminal).

💡 React Concepts & Architecture Q&A
1. What is JSX, and why is it used in React?
JSX is a syntax extension that lets us write HTML-like UI templates directly inside JavaScript. React uses JSX because it makes component structure significantly easier to read, write, and maintain.

2. What is the difference between props and state?
Props are read-only data passed into a component by its parent.

State is local data owned and managed internally by a component that can change over time in response to user actions.

3. What does the useState hook do, and where did you use it in this project?
useState allows functional components to manage reactive state variables. In this project, it was used for tracking the technology list, the user's selected stack, loading statuses, and the mobile navigation menu toggle state.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect handles side effects (like data fetching, subscriptions, or manual DOM manipulations) after component rendering. It was used here to fetch technologies.json asynchronously when the application initially mounts.

5. Why does every item in a .map() list need a unique key prop?
React uses the key attribute to uniquely identify each list item between renders. A stable, unique key helps React efficiently reconcile the Virtual DOM and update only the items that have changed.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying different UI elements based on specific runtime conditions. For example, inside the stack panel, an empty-stack message is rendered when stack.length === 0; otherwise, the list of selected technologies is mapped out.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to Child: Data is passed down via props (e.g., passing technology and isAdded status to TechnologyCard).

Child to Parent: The child communicates back by invoking a callback function passed down through props from the parent (e.g., calling onAdd(technology) when a user clicks the add button).

🔗 Links & Live Demo
Live Demo: View Live Site

Repository: GitHub Repository

📄 License
This project is open-source and available under the MIT License.
