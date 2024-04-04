import { Router } from "express";
import { artist } from "../controllers/artists.controllers.js";

const router = Router();

router.route("/:id").get(artist);

export default router;
