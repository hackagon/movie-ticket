import * as express from "express";
import * as genreController from "./controllers/genre";

const router = express.Router();

/**
 * @endpoint     /genres
 */
router.get("/genres", genreController.getGenre)
router.post("/genres", genreController.createGenre)
router.put("/genres/:genreId", genreController.replaceGenreById)
router.delete("/genres/:genreId", genreController.deleteGenreById)

export default router;