import { IPeopleRepository } from "../../domain/repositories/peoples_repository";
import { PeopleModel } from "../../domain/models/People";
import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "inversify";
import { TYPES } from "../di/types";

@injectable()
class PeopleRepository implements IPeopleRepository {
  constructor(
    @inject(TYPES.DbConnection)
    private dbConnection: PrismaClient
  ) {}

  getAll = async (): Promise<PeopleModel[]> => {
    const peoples = await this.dbConnection.peoples.findMany();
    return peoples.map((i) => new PeopleModel({ id: i.id, name: i.name }));
  };
}

export { PeopleRepository };
