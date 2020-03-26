import { Request, Response, NextFunction } from "express";
import { Genre } from "../../models"
import * as createError from "http-errors";
import * as ITF from "../../interfaces";

export const getGenre = (req: Request, res: Response) => {
  Genre.findAll()
    .then(genres => {
      res.status(200).json(genres)
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

export const createGenre = async (req: Request, res: Response) => {
  const { name, imageURL } = req.body;

  const newGenre = Genre.build({ name, imageURL })
  await newGenre.save()
    .then((genre: Genre) => {
      res.status(200).json(genre)
    })
    .catch(err => res.json(err))
}

export const replaceGenreById = async (req: Request, res: Response, next: NextFunction) => {
  const { name, imageURL } = req.body;
  const { genreId } = req.params;

  Genre.findByPk(genreId)
    .then((genre: Genre) => {
      if (!genre) return Promise.reject({ status: 404, message: "Genre not found" })

      genre.name = name;
      genre.imageURL = imageURL;

      return genre.save()
    })
    .then((genre: Genre) => res.status(200).json(genre))
    .catch((err: ITF.Error) => {
      next(createError(err.status, err.message))
    })
}

export const deleteGenreById = async (req: Request, res: Response, next: NextFunction) => {
  const { genreId } = req.params;

  Genre.findByPk(genreId)
    .then((genre: Genre) => {
      if (!genre) return Promise.reject({ status: 404, message: "Genre not found" })

      return genre.destroy();
    })
    .then(() => res.status(200).json({ message: "Delete successfully" }))
    .catch((err: ITF.Error) => {
      next(createError(err.status, err.message))
    })
}