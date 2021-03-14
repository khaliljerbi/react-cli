import { Command } from "commander";
import { generateReactProjectForNX } from "../actions/nx/generate-nx-project";
import { errorConsole } from "../helpers/console";

export const createReactNxCommand = new Command()
  .command("create-react-nx [appName]")
  .description("Generate react application from a boilerplate for NX project.")
  .action((appName: string) => {
    if (!appName) {
      errorConsole("You must provide an application name !");
      process.exit(1);
    }

    generateReactProjectForNX(appName);
  });
