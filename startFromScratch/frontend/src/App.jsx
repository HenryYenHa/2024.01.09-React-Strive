import { useEffect, useState } from "react";
import "./App.css";
import SuperheroForm from "./components/SuperheroForm";
// import superheroes from "./superheroes.json";

function SuperheroDetails(props) {
  console.log(props.color);
  const superhero = props.superhero;
  const heroColor = superhero.color;
  return (
    <li>
      <div style={{ background: heroColor }}>
        <h2>{superhero.name}</h2>
        <p>Alter Ego: {superhero.alterEgo}</p>
        <p>Power: {superhero.power}</p>
        <p>Home City: {superhero.homeCity}</p>
      </div>
    </li>
  );
}

function App() {
  const [superheroes, setSuperheroes] = useState();

  //Grab the data from backend
  const getSuperHeroes = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    setSuperheroes(data); //Refresh page here and update superheroes with list of (*1)
  };
  //Use effect to only run grabbing the database once to prevent (*1) from causing an infinite loop
  useEffect(() => {
    getSuperHeroes();
  }, []);

  return (
    <div>
      <h1>Superheroes</h1>
      <ul>
        {/* the && is to make sure that superheroes is loaded first before attempting */}
        {superheroes &&
          superheroes.map((sHeroes) => {
            return <SuperheroDetails superhero={sHeroes} color="red" />;
          })}
      </ul>
      <SuperheroForm />
    </div>
  );
}

export default App;
