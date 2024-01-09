import mongoose from "../mongoose.js";

const Schema = mongoose.Schema;

const superheroSchema = new Schema({
  name: { type: String, required: true, unique: true },
  alterEgo: String,
  powers: [String],
  sidekicks: [{ name: String, alterEgo: String }],
});

//Get the schema for superhero
const Superhero = mongoose.model("Superhero", superheroSchema);

//Enable creation of new superheroes
export const createSuperhero = async (superhero) => {
  const newSuperhero = await Superhero.create(superhero);
  return newSuperhero;
};

export const listSuperHeroes = async (superhero) => {
  //Find without parameters will return all of them
  const allSuperHeroes = await Superhero.find();
  return allSuperHeroes;
};
