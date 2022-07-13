import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import routes from "../../interfaces/routes";

dotenv.config();

const app = express();

const port = process.env.SERVER_PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/v1", routes);

app.listen(port, () => {
  console.log(`Examplex app listening on port ${port}`);
});
