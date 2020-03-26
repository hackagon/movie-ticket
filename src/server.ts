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

const port: number = 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
})