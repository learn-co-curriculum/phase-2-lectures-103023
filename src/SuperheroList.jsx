import React from "react";
import Superhero from "./Superhero";

function SuperheroList({ superheroes }) {
  const renderHeroes = superheroes.map((superhero) => {
    return (
      <Superhero
        key={superhero.name}
        name={superhero.name}
        image={superhero.image}
        group={superhero.group}
      />
    );
  });
  return <div className="hero-container">{renderHeroes}</div>;
}

export default SuperheroList;
