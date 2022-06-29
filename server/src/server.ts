import express from "express";
import dotenv from "dotenv";
import { PeopleRepository } from "./repository/people";
import { connection } from "./infra/database/connection";

dotenv.config();
 
const app = express();

const port = process.env.SERVER_PORT || 3000;

app.get("/", async (req, res) => {
  const repository = PeopleRepository(connection);

  const peopleName = req.query.name;

  if (peopleName) {
    await repository.create(peopleName as string);
  }

  const peoplesList = await repository.list();

  const peoplesText = peoplesList.map(people => people.name).join(", <br/>");

  return res.send(`Welcome! List of users in database (${peoplesList.length}) <br/> ${peoplesText}`);
});

app.listen(port, () => {
  console.log(`Examplex app listening on port ${port}`);
});
