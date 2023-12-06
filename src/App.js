import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("#139675");

  function generateColor() {
    setColor("#" + Math.random().toString(16).substring(12));
  }

  function action() {
    setCounter(counter + 1);
    generateColor();
  }

  return (
    <div className="App">
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={() => {
          action();
        }}
      >
        {counter}
      </button>
    </div>
  );
}

export default App;
