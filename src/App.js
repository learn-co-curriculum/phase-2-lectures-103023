import "./App.css";
import { useState } from "react";
import Greeting from "./Greeting";
import Superhero from "./Superhero";
import superheroes from "./superheroes";

import SuperheroList from "./SuperheroList";
import React from "react";

function App() {
  // let counter = 0;
  const greeting = "World of Superheroes";

  const [counter, setCounter] = useState(1);
  const [isDarkMode, setDarkMode] = useState(false);

  function handleClick() {
    let newCounterValue = counter + 1;
    console.log("Button is clicked!");
    setCounter(newCounterValue);
    console.log(counter);
  }

  function handleDecrement() {
    if (counter <= 0) {
      alert("You cannot set it less than 0");
    } else {
      setCounter(counter - 1);
    }
  }

  function handleDarkMode() {
    setDarkMode(!isDarkMode);
  }

  return (
    <div
      className="App"
      style={
        isDarkMode
          ? {
              backgroundColor: "grey",
            }
          : {
              backgroundColor: "white",
            }
      }
    >
      <button onClick={handleDarkMode}>
        {isDarkMode ? "Light mode" : "Dark mode"}
      </button>
      <h1>{counter}</h1>
      <button onClick={handleClick}>Increment</button>

      {counter > 0 ? (
        <button onClick={handleDecrement}>Decrement</button>
      ) : null}

      <Greeting greeting={greeting} />
      <SuperheroList superheroes={superheroes} />
    </div>
  );
}

export default App;
