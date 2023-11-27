import React from "react";

function NewSuperHeroForm() {
  return (
    <div>
      <h1>Add Superhero</h1>
      <form id="superhero-form">
        <input type="text" placeholder="Superhero name" value="" />
        <input type="text" placeholder="Image URL" value="" />
        <input type="text" placeholder="Group" value="" />
        <button type="submit">Add Superhero</button>
      </form>
    </div>
  );
}

export default NewSuperHeroForm;
