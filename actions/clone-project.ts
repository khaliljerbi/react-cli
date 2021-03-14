import simpleGit, { SimpleGit } from "simple-git";
import { getRootFolderPath } from "../helpers/utils";

const git: SimpleGit = simpleGit();

export const cloneRepo = async (repoPath: string) => {
  try {
    await git.clone(repoPath, `${getRootFolderPath()}/clonedTemp`);
  } catch (error) {
    console.log(error);
  }
};
