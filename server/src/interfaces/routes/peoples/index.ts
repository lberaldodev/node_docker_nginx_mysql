import { Router } from "express";
import { connection } from "../../../infra/database/connection";
import { FindAllPeoples } from "../../../application/usecases/find-all-peoples";
import { PeopleRepository } from "../../../infra/repositories/peoples_repository";

import { PeopleController } from "../../controllers/peoples";

const peopleRouter = Router();

const peopleRepository = new PeopleRepository({ connection: connection });
const useCase = new FindAllPeoples({ repository: peopleRepository });
const controller = new PeopleController({ findAllPeoples: useCase });

peopleRouter.get("/", controller.index);

export { peopleRouter };
