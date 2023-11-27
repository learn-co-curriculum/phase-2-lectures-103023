import React, { useState } from "react";

function NewSuperHeroForm({ onAddSuperhero }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [group, setGroup] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting the form!");

    const newSuperHero = {
      name,
      image,
      group,
    };

    console.log(newSuperHero);

    fetch("http://localhost:4000/superheroes", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(newSuperHero),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onAddSuperhero(data);
      });
  }

  function handleName(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h1>Add Superhero</h1>
      <form onSubmit={handleSubmit} id="superhero-form">
        <input
          type="text"
          onChange={handleName}
          placeholder="Superhero name"
          value={name}
        />
        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          value={image}
        />
        <input
          type="text"
          onChange={(e) => setGroup(e.target.value)}
          placeholder="Group"
          value={group}
        />
        <button type="submit">Add Superhero</button>
      </form>
    </div>
  );
}

export default NewSuperHeroForm;
