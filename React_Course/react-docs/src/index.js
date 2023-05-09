import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const Navigation = () => {
  return (
    <h1>Navigation Bar</h1>
  )
}

// Clear the existing HTML content
// document.body.innerHTML = '<div id="app"></div>';

// // Render your React component instead
// const rootJs = createRoot(document.getElementById('app'));
// rootJs.render(<h1>Hello, world</h1>);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const navigation = document.getElementById("navigation");
const domRoot = createRoot(navigation);

domRoot.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
