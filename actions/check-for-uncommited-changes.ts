import { execSync } from "child_process";

export const checkForUncommittedChanges = () => {
  const gitResult = execSync(`git status --porcelain`);
  if (gitResult.length > 0) {
    console.log("❗️ Careful!");
    console.log("You have uncommited changes in your repository.");
    console.log("");
    console.log(gitResult.toString());
    console.log("Please commit your changes before running this command !");
    process.exit(1);
  }
};
