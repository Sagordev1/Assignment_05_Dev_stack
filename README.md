# Dev Stack — Development Stack Builder

A responsive React website that helps developers explore technologies and build a personal development stack. The UI follows the supplied design reference with a clean white layout, orange → pink → violet gradient branding, technology cards, and a responsive stack sidebar.

## Live Features

- Browse 12 technologies loaded from a separate JSON file.
- Add technologies to a personal stack without duplicates.
- Remove individual technologies or clear the whole stack.
- Responsive navbar with a mobile hamburger menu.
- Loading state while technology JSON is fetched.
- React-Toastify notifications for add, duplicate, remove, and remove-all actions.

## Technologies Used

- React.js
- JavaScript (ES6+)
- Vite
- CSS
- React-Toastify
- JSON

## Project Structure

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
```

## Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

For a production build:

```bash
npm run build
npm run preview
```

## Design Notes

The shared brand gradient is defined once in `src/index.css`:

```css
--brand-gradient: linear-gradient(90deg, #ff6b22 0%, #ef2779 52%, #8e2de2 100%);
```

The same variable is used for the brand treatment, hero highlight, and primary buttons, so the theme can be changed from one place.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like UI inside JavaScript. React uses JSX because it makes component structure easier to read and build.

### 2. What is the difference between props and state?

Props are data passed into a component by its parent. State is data owned and managed by a component that can change over time.

### 3. What does the useState hook do, and where did you use it in this project?

`useState` creates state in a React component. I used it for the technology list, selected stack, loading status, and mobile menu state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after rendering. I used it to fetch `technologies.json` when the app loads.

### 5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each list item between renders. A unique key helps React update only the items that changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. In the stack panel, an empty-stack message is shown when `stack.length === 0`; otherwise the selected technologies are shown.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data through props, such as `technology` and `isAdded` to `TechnologyCard`. The child can send information back by calling a callback function passed as a prop, such as `onAdd(technology)`.


