import { IPeopleRepository } from "../../domain/repositories/peoples_repository";
import mysql from "mysql";
import { PeopleModel, TPeople } from "../../domain/models/People";
import { PrismaClient } from "@prisma/client";

type Dependencies = {
  connection: PrismaClient;
};

class PeopleRepository implements IPeopleRepository {
  readonly connection: PrismaClient;

  constructor({ connection }: Dependencies) {
    this.connection = connection;
  }

  getAll = async (): Promise<PeopleModel[]> => {
    const peoples = await this.connection.peoples.findMany();
    return peoples.map((i) => new PeopleModel({ id: i.id, name: i.name }));
  };
}

export { PeopleRepository };
