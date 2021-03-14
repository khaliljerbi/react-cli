import { repoPath } from "../../constants";
import { execCommand, getRootFolderPath } from "../../helpers/utils";
import { addBuildPathToWorkspaceJson } from "./add-build-path-to-workspace";
import { addCRACommandsToWorkspaceJson } from "./add-cra-commands-to-workspace";
import { cloneRepo } from "../clone-project";
import {
  installBoilerplateDeps,
  installDefaultDepsToNX,
} from "../install-dependencies";
import { writeConfigOverrides } from "./override-wepback-config-nx";
import { setupTsConfig } from "./setup-config-files";

const createNxApp = async (name: string) => {
  console.log("Creating Nx application, please wait...");
  execCommand(`yarn nx generate @nrwl/react:app ${name} --routing=false`);
};

export const replaceNxAppWithCra = async (name: string) => {
  try {
    console.log("Replacing created application with custom boilerplate...");

    console.log("🧹 Clearing unused files...");

    execCommand(
      `rm -rf ${getRootFolderPath()}/apps/${name}/*  ${getRootFolderPath()}/apps/${name}/{.babelrc,.browserslistrc}`
    );

    console.log("🚚 Moving your React app in the generated NX folder");

    process.chdir(`${getRootFolderPath()}/apps/${name}`);

    await cloneRepo(repoPath);

    execCommand(`mv ./clonedTemp/* ./`);

    execCommand(`rm -rf clonedTemp`);

    process.chdir(`../..`);

    console.log("📃 Setting up config files...");

    setupTsConfig(name);

    console.log("🤹 Add CRA commands to workspace.json");

    addCRACommandsToWorkspaceJson(name);
    addBuildPathToWorkspaceJson(name);

    console.log("🧑‍🔧 Customize webpack");

    writeConfigOverrides(name);

    console.log("🛬 Skip CRA preflight check since Nx manages the monorepo");

    execCommand("echo SKIP_PREFLIGHT_CHECK=true > .env");

    console.log("🙂 Please be patient, one final step remaining!");

    console.log(
      "🧶 Adding npm packages to your new Nx workspace to support CRA & boilerplate packages, this might take couples minutes..."
    );
    // install default packages
    installDefaultDepsToNX();

    installBoilerplateDeps();

    console.log("🎉 Done!");
  } catch (error) {
    console.log("error", error);
  }
};

// name will be retrieved from CLI later
export const generateReactProjectForNX = async (appName: string) => {
  try {
    // await cloneRepo("https://github.com/khaliljerbi/react-boilerplate.git");
    await createNxApp(appName);
    await replaceNxAppWithCra(appName);
  } catch (error) {
    console.log("Error", error);
  }
};
