import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import { createRoot } from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById('root'));
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>);