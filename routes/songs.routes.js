import { Router } from "express";
import { song } from "../controllers/songs.controllers.js";

const router = Router();

router.route("/:songid").get(song);

export default router;
