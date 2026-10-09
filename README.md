# 🚀 Dev Stack — Development Stack Builder

A modern, responsive React application that helps developers explore technologies and build their own development stack. Discover available technologies, select your favorites, and manage your personalized stack through a clean and interactive user interface.

<!-- Replace the image path if your screenshot is stored elsewhere -->

![Dev Stack Banner](public/assets/hero-stack.png)

<p align="center">
  <strong>Explore Technologies. Build Your Stack. Code Smarter.</strong>
</p>

---

## 🌐 Live Demo & Repository

* **Live Demo:** [Visit Dev Stack](YOUR_LIVE_DEMO_URL)
* **GitHub Repository:** [View Source Code](YOUR_GITHUB_REPOSITORY_URL)

---

## 📋 Table of Contents

* [✨ Overview](#-overview)
* [🚀 Key Features](#-key-features)
* [🛠️ Technologies Used](#️-technologies-used)
* [📦 Dependencies](#-dependencies)
* [📁 Project Structure](#-project-structure)
* [🎨 Design Highlights](#-design-highlights)
* [⚙️ Installation & Setup](#️-installation--setup)
* [💡 React Questions & Answers](#-react-questions--answers)
* [🔮 Future Improvements](#-future-improvements)
* [📄 License](#-license)

---

## ✨ Overview

**Dev Stack** is a React-based web application designed to make technology discovery and stack management simple and intuitive.

The application displays a collection of development technologies loaded from a JSON data source. Users can explore the available technologies, add their favorites to a personal stack, remove individual selections, or clear the entire stack whenever needed.

With its responsive layout, interactive technology cards, toast notifications, and vibrant gradient branding, Dev Stack provides a smooth experience across desktop, tablet, and mobile devices.

### 🎯 Project Goals

* Make exploring development technologies easy.
* Allow users to create and manage a personalized tech stack.
* Provide immediate visual feedback for user interactions.
* Deliver a clean and responsive user experience.

---

## 🚀 Key Features

### 1. 🔍 Dynamic Technology Exploration

* Displays 12 development technologies from a separate JSON file.
* Loads technology data dynamically when the application starts.
* Presents technologies in interactive cards.
* Provides visual feedback when a technology is selected.
* Prevents duplicate technologies from being added to the stack.

### 2. 🧩 Personal Stack Management

* Add technologies to a personalized development stack.
* View selected technologies in a dedicated stack panel.
* Remove individual technologies from the stack.
* Clear all selected technologies with a single action.
* Display an empty-state message when no technologies are selected.

### 3. 📱 Responsive User Interface

* Clean and modern layout with a white background.
* Responsive technology cards and stack panel.
* Mobile-friendly navigation with a hamburger menu.
* Interactive hover effects and smooth UI transitions.
* Loading indicators for a better user experience.

### 4. 🔔 Toast Notifications

* Displays success notifications when a technology is added.
* Alerts users when they try to add a duplicate technology.
* Confirms removal and clear-all actions with notifications.
* Uses React Toastify for user-friendly feedback.

### 5. 🎨 Consistent Branding

* Orange-to-pink-to-violet gradient branding.
* Reusable CSS custom properties.
* Gradient highlights and primary action buttons.
* Consistent styling across the application's major sections.

---

## 🛠️ Technologies Used

| Technology        | Purpose                                 |
| ----------------- | --------------------------------------- |
| React.js          | Building reusable UI components         |
| JavaScript (ES6+) | Application logic and interactivity     |
| Vite              | Development server and build tooling    |
| CSS3              | Responsive styling and visual design    |
| JSON              | Storing technology data                 |
| React Toastify    | Toast notifications                     |
| Git & GitHub      | Version control and source code hosting |

---

## 📦 Dependencies

The project uses the following main dependencies:

* **react** — UI library.
* **react-dom** — Rendering React components in the browser.
* **react-toastify** — Displaying toast notifications.
* **vite** — Fast development server and production build tool.

For the complete dependency list and available scripts, see `package.json`.

---

## 📁 Project Structure

```text
dev-stack-builder/
│
├── public/
│   ├── assets/
│   │   ├── hero-stack.png
│   │   └── logo-text.png
│   │
│   └── data/
│       └── technologies.json
│
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── StackPanel.jsx
│   │   └── TechnologyCard.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

> **Note:** This structure represents the expected project layout. Keep only the files and folders that actually exist in your repository.

---

## 🎨 Design Highlights

Dev Stack uses a minimal white interface with a vibrant gradient color palette to create a modern developer-focused experience.

### 🌈 Brand Gradient

The shared brand gradient is defined through a CSS custom property in `src/index.css`.

```css
:root {
  --brand-gradient: linear-gradient(
    90deg,
    #ff6b22 0%,
    #ef2779 52%,
    #8e2de2 100%
  );
}
```

### Design Principles

* **Consistency:** Reusable gradient styling across key UI elements.
* **Simplicity:** A clean layout that keeps the focus on technologies.
* **Responsiveness:** Layouts adapt to different screen sizes.
* **Interactivity:** Hover effects and state indicators communicate user actions.
* **Accessibility:** Clear labels and readable content help improve usability.

---

## ⚙️ Installation & Setup

Follow these steps to run Dev Stack on your local machine.

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm (included with Node.js)
* Git (optional, for cloning the repository)

### 1. Clone the Repository

Replace the example URL with your actual GitHub repository URL.

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd dev-stack-builder
```

Use the actual folder name created when cloning your repository.

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Open the local URL shown in your terminal. With the default Vite configuration, it is usually:

```text
http://localhost:5173
```

You can now explore technologies and build your own development stack!

### 🏗️ Create a Production Build

To create an optimized production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

---

## 💡 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a JavaScript syntax extension that allows developers to write HTML-like markup inside JavaScript. It makes React components easier to read, write, and maintain.

### 2. What is the difference between props and state?

**Props** are values passed from a parent component to a child component. **State** is data managed within a component that can change over time and trigger a re-render.

### 3. What does the `useState` hook do, and where is it used in this project?

The `useState` hook allows functional components to store and update state.

In Dev Stack, state can be used to manage the selected technologies, loading status, and mobile navigation state.

### 4. What does the `useEffect` hook do, and why is it useful for loading JSON data?

The `useEffect` hook runs side effects after rendering. It can be used to load `technologies.json` when the application first mounts and update the interface when the data becomes available.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses keys to identify list items between renders. Unique, stable keys help React determine which items have been added, removed, or updated.

Example:

```jsx
technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))
```

Use the actual unique identifier available in your technology data.

### 6. What is conditional rendering? Give an example from this project.

Conditional rendering means displaying different UI elements depending on a condition.

For example, the stack panel can display an empty-state message when the stack is empty and a list of selected technologies when items are available.

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty. Add a technology to get started!</p>
) : (
  stack.map((technology) => (
    <div key={technology.id}>
      {technology.name}
    </div>
  ))
)}
```

Adapt the property names to match the actual data structure.

### 7. How can a parent component pass data to a child, and how can a child communicate back to the parent?

A parent passes data through props. A child can communicate user actions back to the parent by calling a callback function supplied through props.

For example, a technology card may receive a `technology` object and an `onAdd` callback. When the user clicks its Add button, the child calls `onAdd(technology)`, allowing the parent to update the selected stack.

---

## 🔮 Future Improvements

Potential enhancements for future versions include:

* 🔎 Search technologies by name.
* 🗂️ Filter technologies by category.
* 💾 Save selected stacks using local storage.
* 📋 Export a personalized stack as a shareable list.
* 🌙 Add a dark mode.
* ➕ Expand the technology library with more tools and frameworks.

---

## 📄 License

This project is intended for learning and educational purposes. If you want to distribute it as open-source software, add a `LICENSE` file to the repository and select the appropriate license, such as the [MIT License](https://opensource.org/license/mit).

---

## 👨‍💻 Author

**Sagor Dev**

* GitHub: [@Sagordev1](https://github.com/Sagordev1)

---

<p align="center">
  <strong>Built with ❤️ using React and JavaScript.</strong>
  <br />
  Explore. Select. Build your Dev Stack.
</p>
