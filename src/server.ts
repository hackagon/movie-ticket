import app from "./app";
import * as chalk from "chalk";

const port: number = 5000;

const server = app.listen(app.get("port"), () => {
  console.log(chalk.red.bold.underline.bgCyan(`App is running on port ${port}`));
})

export default server;