import { success, error } from "log-symbols";
const chalk = require("chalk");

export const doneConsole = (message: string) =>
  console.log(`[${success} ${chalk.green.bold("Done")}]`, message);

export const errorConsole = (message: string) =>
  console.log(
    `[${error} ${chalk.red.bold("Failed")}]`,
    chalk.red.bold(message)
  );
