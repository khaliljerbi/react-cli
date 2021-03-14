import { program } from "commander";
// import { getApplicationRootPath } from "./helpers/utils";
import { createReactNxCommand } from "./commands/create-react-nx";
import { generateReactComponentNX } from "./commands/generate-component";

program.addCommand(createReactNxCommand).addCommand(generateReactComponentNX);

program.parse(process.argv);
