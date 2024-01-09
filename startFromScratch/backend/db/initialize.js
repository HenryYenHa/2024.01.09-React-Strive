import initialData from "../superheroes.json" assert { type: "json" };
import { createSuperhero } from "./models/superheroModel.js";
//Importing the JSON file and calling the createSuperHero function to plug these into the database
const loadInitialData = async () => {
  for (let i = 0; i < initialData.length; i++) {
    const superhero = initialData[i];
    try {
      console.log(`creating superhero ${superhero.name}`);
      const newSuperhero = await createSuperhero(superhero);
      console.log(
        `created superhero ${newSuperhero.name} with id ${newSuperhero._id}`
      );
    } catch (err) {
      console.log(`error creating superhero ${superhero.name}`);
      console.log(err.message);
    }
  }
  console.log("finished loading initial data");
  return null;
};
loadInitialData();
process.exit(console.log("This is done some I'm gunna die now, byeeeeeeeee"));
