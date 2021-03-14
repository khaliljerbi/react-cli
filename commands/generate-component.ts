import { Command } from "commander";
import * as inquirer from "inquirer";
import { APPLICATIONS_FOLDER_NAME } from "../constants";
import { getDirectories } from "../helpers/utils";

let projects = getDirectories(APPLICATIONS_FOLDER_NAME);

const questions: inquirer.QuestionCollection<unknown> = [
  {
    type: "list",
    name: "projectName",
    message: "In which component you want to create this component ?",
    choices: projects,
  },
];
export const generateReactComponentNX = new Command()
  .command("generate:component:nx <name>")
  .alias("g:c:nx")
  .description("Generate react component for NX.")
  .option("-m, --memo", "Add memo to the component")
  .action(async (name: string, options) => {
    try {
      const answers = await inquirer.prompt(questions);
      console.log("answers", answers, name, options);
    } catch (error) {}
  });
