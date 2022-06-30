import { Router } from "express";

import peoples from "./peoples";

const router = Router();

router.use("/peoples", peoples);

export default router;