import mysql from "mysql";

type PeopleRepository = {
  create: (name: string) => Promise<void>;
  list: () => Promise<mysql.Query[]>;
}

const PeopleRepository = (connection: mysql.Connection): PeopleRepository => {
  return {
    create: (name: string) => {
      return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO people(name) values('${name}');`, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    },
    list: () => {
      return new Promise((resolve, reject) => {
        connection.query("SELECT * from people", (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        });
      });
    }
  };
};

export {
  PeopleRepository
};