import React, { useState, useEffect } from "react";
import Superhero from "./Superhero";
import Search from "./Search";
import NewSuperHeroForm from "./NewSuperHeroForm";

function SuperheroList() {
  const [selectedHero, setSelectedHero] = useState("none");

  const [searchTerm, setSearchTerm] = useState("");

  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/superheroes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuperheroes(data);
      });
  }, []);

  function handleSelectHero(name) {
    setSelectedHero(name);
  }

  function onSearch(term) {
    setSearchTerm(term);
  }

  function onAddSuperhero(newSuperHero) {
    setSuperheroes([...superheroes, newSuperHero]);
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
      <NewSuperHeroForm onAddSuperhero={onAddSuperhero} />
      <div className="hero-container">{renderHeroes}</div>
    </div>
  );
}

export default SuperheroList;
