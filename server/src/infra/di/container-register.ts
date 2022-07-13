import {
  FindAllPeoplesUseCase,
  TFindAllPeoplesUseCase,
} from "../../application/usecases/find-all-peoples";
import { Container } from "inversify";
import { TYPES } from "./types";
import { DbConnection } from "../database/connection";
import { PeopleRepository } from "../repositories/peoples_repository";
import { PrismaClient } from "@prisma/client";
import { IPeopleRepository } from "../../../src/domain/repositories/peoples_repository";
import {
  PeopleController,
  IPeopleController,
} from "../../../src/interfaces/controllers/peoples";

const container = new Container();

container.bind<PrismaClient>(TYPES.DbConnection).toConstantValue(DbConnection);
container.bind<IPeopleRepository>(TYPES.PeopleRepository).to(PeopleRepository);
container
  .bind<TFindAllPeoplesUseCase>(TYPES.FindAllPeoplesUseCase)
  .to(FindAllPeoplesUseCase);
container.bind<IPeopleController>(TYPES.PeopleController).to(PeopleController);

export { container };
