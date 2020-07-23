import React from "react";
import logo from "./logo.svg";
import "./App.css";

const names = ["aaa", "bbb", "ccc"];

function App() {
  return (
    <ul>
      {names.map(name => (
        <li>{name}</li>
      ))}
    </ul>
  );
}

export default App;
