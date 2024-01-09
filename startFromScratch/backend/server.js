import express from "express";
// import superheroes from "./superheroes.json" assert { type: "json" };
import dotenv from "dotenv";
import {
  createSuperhero,
  listSuperHeroes,
} from "./db/models/superheroModel.js";
dotenv.config();

console.log("THE MONGOURL", process.env.MONGO_URL);
const app = express();

app.use(express.json());

//TROUBLESHOOT WHAT IS BEING SENT
app.all("*", (req, res, next) => {
  console.log("SERVERPATH=", req.path);
  next(); //Next will allow the thing to keep going and go through the next available command/path.
});

//getting '/' shall get it all
app.get("/api", async (req, res) => {
  const allSuperheroes = await listSuperHeroes();
  res.send(allSuperheroes);
});

app.post("/api", async (req, res) => {
  const newSuperHero = req.body;
  console.log("newSuperHero from server: ", newSuperHero);
  const createdSuperhero = await createSuperhero(newSuperHero);
  res.send(createdSuperhero);
});

app.listen(3000, () => {
  console.log("listening on port http://localhost:3000");
});
