import "./App.css";

import Greeting from "./Greeting";
import Superhero from "./Superhero";
import superheroes from "./superheroes";

import SuperheroList from "./SuperheroList";

function App() {
  const greeting = "World of Superheroes";
  return (
    <div className="App">
      <Greeting greeting={greeting} />
      <SuperheroList superheroes={superheroes} />
    </div>
  );
}

export default App;
