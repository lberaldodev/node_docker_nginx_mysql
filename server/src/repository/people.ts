import mysql from "mysql";

type PeopleRepository = {
  create: (name: string) => Promise<void>;
  list: () => Promise<IPeople[]>;
}

interface IPeople {
  name: string;
  id: number;
}

class People implements IPeople{
  readonly name: string;
  readonly id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
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
        connection.query("SELECT * from people", (err, results: IPeople[]) => {
          if (err) {
            return reject(err);
          }
          const peoples = results.map(i => new People(i.name, i.id));
          return resolve(peoples);
        });
      });
    }
  };
};

export {
  PeopleRepository
};