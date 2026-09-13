# Dev Stack

Dev Stack is a responsive React website where users can explore modern web technologies and create their own personalized technology stack.

## Technologies Used

- React.js
- TypeScript
- Vite
- TypeScript
- CSS
- JSON
- React-Toastify

## 3 Main Features

1. Explore 12 technologies with category, difficulty, rating and badges.
2. Add and remove technologies from a personal "Your Stack" sidebar.
3. Responsive design with a mobile navbar and toast notifications.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like UI code inside JavaScript. React uses JSX to make component UI easier to read and build.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child. State is data controlled inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` creates state and gives a function to update it. I used it for the technology list, selected stack, loading state and mobile menu.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after rendering. I used it to fetch the local JSON file when the app loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the unique key to identify each list item and efficiently update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it in the stack sidebar: if the stack is empty, it shows the empty message; otherwise it shows the selected items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props. The parent can also pass a function as a prop, and the child calls that function to send an action or data back to the parent.

## Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Suggested Git Commit History

Use meaningful commits instead of one large commit:

```bash
git add .
git commit -m "chore: initialize Vite React project"

git add .
git commit -m "feat: add responsive navbar and hero"

git add .
git commit -m "feat: add technology JSON data"

git add .
git commit -m "feat: render responsive technology cards"

git add .
git commit -m "feat: implement stack add and remove"

git add .
git commit -m "feat: add toast notifications"

git add .
git commit -m "feat: add loading state and responsive styling"

git add .
git commit -m "docs: add project README"
```
