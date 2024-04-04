import { Router } from "express";
import { specificAlbum } from "../controllers/albums.controllers.js";

const router = Router();

router.route("/:id").get(specificAlbum);

export default router;
