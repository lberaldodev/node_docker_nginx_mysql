import { Router } from "express";
import { PeopleController } from "../controllers/peoples";

const router = Router();

const controller = new PeopleController();

router.get("/", controller.index);

export default router;