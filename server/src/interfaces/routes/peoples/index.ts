import { Router } from "express";
import { IPeopleController } from "../../controllers/peoples/index";
import { container } from "../../../infra/di/container-register";
import { TYPES } from "../../../infra/di/types";

const peopleRouter = Router();

peopleRouter.get(
  "/",
  container.get<IPeopleController>(TYPES.PeopleController).index
);

export { peopleRouter };
