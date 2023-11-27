import { useState } from "react";

function Search({ onSearch, searchTerm }) {
  return (
    <div>
      <input
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search Superheroes..."
        value={searchTerm}
      ></input>
    </div>
  );
}

export default Search;

// type in the search box -> we want re render the list with superheroes that matches the characters

// state for the search term -> updates as I type
// ! should be within the superherolist -> I can directly use the state to update the list

// updates -> superherolist -> update superheroes list

// filter -> name that matches the search term
