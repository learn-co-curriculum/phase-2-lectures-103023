import "./App.css";
import { useEffect, useState } from "react";
import Greeting from "./Greeting";
import superheroes from "../superheroes";
import SuperheroList from "./SuperheroList";
import React from "react";

function App() {
  const greeting = "World of Superheroes";
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    console.log("I am running after the page has finished rendering");
  }, []);

  useEffect(() => {
    console.log(
      "I am depended on the isClicked state. I run every time the state updates!"
    );
  }, []);

  return (
    <div className="App">
      <button>Click me!</button>
      <Greeting greeting={greeting} />
      <SuperheroList superheroes={superheroes} />
    </div>
  );
}

export default App;
