import { useState } from "react";

function Superhero({ name, image, group, onSelect }) {
  const [isCyan, setIsCyan] = useState(true);

  function handleClick() {
    setIsCyan(!isCyan);
    console.log(name, "clicked");
    onSelect(name);
  }

  return (
    <div
      onClick={handleClick}
      id="superhero"
      className={isCyan ? "superhero-cyan" : "superhero-purple"}
      style={{
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{name}</h3>
      <p>{group}</p>
      <img height={250} width={"auto"} src={image} />

      {/* <p>{selectedHero}</p> */}
    </div>
  );
}

export default Superhero;
