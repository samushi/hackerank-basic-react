import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const SliderContent = [
  {
    title: "Hello HackerRank!",
    text: "Welcome to the world of coding.",
  },
  {
    title: "What is coding?",
    text: "Coding is the process of writing instructions to a computer to perform a specific task.",
  },
  {
    title: "What is a computer?",
    text: "A computer is a machine that can perform a set of instructions, or a set of tasks, to perform a specific task.",
  },
];

ReactDOM.render(
  <App slides={SliderContent} />,
  document.getElementById("root")
);
registerServiceWorker();
