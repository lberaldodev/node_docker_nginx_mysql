import { IPeopleRepository } from "../../domain/repositories/peoples_repository";
import mysql from "mysql";
import { PeopleModel, TPeople } from "../../domain/models/People";

type Dependencies = {
  connection: mysql.Connection;
};

class PeopleRepository implements IPeopleRepository {
  readonly connection: mysql.Connection;

  constructor({ connection }: Dependencies) {
    this.connection = connection;
  }

  getAll = async (): Promise<PeopleModel[]> => {
    return new Promise((resolve, reject) => {
      this.connection.query(
        "SELECT * from people",
        (err, results: TPeople[]) => {
          if (err) {
            return reject(err);
          }
          const peoples = results.map(
            (i) => new PeopleModel({ id: i.id, name: i.name })
          );
          return resolve(peoples);
        }
      );
    });
  };
}

export { PeopleRepository };
