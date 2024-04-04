import { Router } from "express";
import { songsByGenre } from "../controllers/songs.controllers.js";

const router = Router();

router.route("/:genre").get(songsByGenre);

export default router;
