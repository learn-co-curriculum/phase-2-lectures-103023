function Greeting({ greeting }) {
  return (
    <div>
      <h1 className="heading">{!greeting ? "Have a great day" : greeting}</h1>
    </div>
  );
}

export default Greeting;
