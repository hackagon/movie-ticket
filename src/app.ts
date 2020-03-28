import * as express from "express";
import { Request, Response, NextFunction } from "express";
import * as ITF from "./interfaces"
import api from "./routes/api";

const app = express();

app.use(express.json());

app.use("/api", api);

app.use(function (err: ITF.Error, req: Request, res: Response, next: NextFunction) {
    res.status(err.status).json(err)
});

app.set("port", process.env.PORT || 5000);

export default app;