import { statSync, existsSync, readdirSync, Dirent } from "fs";
import { execSync } from "child_process";

export const isYarn = () => {
  try {
    statSync("yarn.lock");
    return true;
  } catch (e) {
    return false;
  }
};

export const getRootFolderPath = () => {
  return `${process.cwd()}`;
};

export const getDirectories = (source: string) =>
  readdirSync(source, { withFileTypes: true })
    // filter e2e folders in case it's nx project
    .filter(
      (dirent: Dirent) => dirent.isDirectory() && !dirent.name.includes("-e2e")
    )
    .map((dirent: Dirent) => ({ name: dirent.name, value: dirent.name }));

export const fileExists = (fileName: string) => existsSync(fileName);

export const addDependency = (dep: string, dev?: boolean) => {
  console.log(`📦 Adding dependency: ${dep}`);
  if (isYarn()) {
    execCommand(`yarn add ${dev ? "-D " : ""}${dep}`);
  } else {
    execCommand(`npm i ${dev ? "--save-dev " : ""}${dep}`);
  }
};

export const execCommand = (command: string) => {
  execSync(command, { stdio: [0, 1, 2] });
};
