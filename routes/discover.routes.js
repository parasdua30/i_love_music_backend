import { Router } from "express";
import { discover } from "../controllers/discover.controllers.js";

const router = Router();

router.route("/").get(discover);

export default router;
