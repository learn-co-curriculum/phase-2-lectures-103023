import React, { useState } from "react";
import Superhero from "./Superhero";
import Search from "./Search";

function SuperheroList({ superheroes }) {
  const [selectedHero, setSelectedHero] = useState("none");

  const [searchTerm, setSearchTerm] = useState("");

  function handleSelectHero(name) {
    setSelectedHero(name);
  }

  function onSearch(term) {
    setSearchTerm(term);
  }

  const filteredHeroes = superheroes.filter((superhero) =>
    superhero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderHeroes = filteredHeroes.map((superhero) => {
    return (
      <Superhero
        key={superhero.name}
        name={superhero.name}
        image={superhero.image}
        group={superhero.group}
        onSelect={handleSelectHero}
        selectedHero={selectedHero}
      />
    );
  });

  return (
    <div>
      <h3>Selected Hero: {selectedHero}</h3>
      <Search onSearch={onSearch} searchTerm={searchTerm} />
      <div className="hero-container">{renderHeroes}</div>
    </div>
  );
}

export default SuperheroList;
