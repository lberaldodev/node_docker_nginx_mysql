import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import routes from "../../interfaces/routes";

const swaggerDocument = require('../../docs/api-spec.json');
const swaggerUi = require('swagger-ui-express');

dotenv.config();

const app = express();

/* Swagger */
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.SERVER_PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/v1", routes);

app.listen(port, () => {
  console.log(`Examplex app listening on port ${port}`);
});
