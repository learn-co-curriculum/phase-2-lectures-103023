import { useState } from "react";

function Superhero({ name, image, group }) {
  const [isCyan, setIsCyan] = useState(true);

  function handleClick() {
    setIsCyan(!isCyan);
  }

  return (
    <div
      onClick={handleClick}
      id="superhero"
      className={isCyan ? "superhero-cyan" : "superhero-purple"}
      style={{
        color: "red",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{name}</h3>
      <p>{group}</p>
      <img height={200} width={"auto"} src={image} />
    </div>
  );
}

export default Superhero;
