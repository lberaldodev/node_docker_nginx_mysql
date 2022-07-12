import { Router } from "express";

import { peopleRouter } from "./peoples";

const router = Router();

router.use("/peoples", peopleRouter);

export default router;
