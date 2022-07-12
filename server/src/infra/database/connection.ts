import mysql from "mysql";

const connection = mysql.createConnection({
  host: process.env.SERVER_DB_HOST,
  user: process.env.SERVER_DB_USER,
  password: process.env.SERVER_DB_PASSWORD,
  database: process.env.SERVER_DB_DATABASE,
});

export { connection };
