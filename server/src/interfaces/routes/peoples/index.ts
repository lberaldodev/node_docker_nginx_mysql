import { Router } from "express";
import { IPeopleController } from "../../controllers/peoples/index";
import { container } from "../../../infra/di/container-register";
import { TYPES } from "../../../infra/di/types";

const peopleRouter = Router();

peopleRouter.get(
  "/",
  // #swagger.operationId = 'getPeoples'
  // #swagger.tags = ['Peoples']
  // #swagger.description = 'Endpoint to get all peoples from database'
  container.get<IPeopleController>(TYPES.PeopleController).index
);

export { peopleRouter };
