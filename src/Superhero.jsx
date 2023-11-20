function Superhero({ name, image, group }) {
  return (
    <div
      id="superhero"
      className="superhero"
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
