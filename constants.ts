export const defaultListOfDeps: string[] = [
  "react-scripts",
  "@testing-library/jest-dom",
  "eslint-config-react-app",
  "react-app-rewired",
  "web-vitals",
];

export interface IBoilerPlateDep {
  name: string;
  isDev: boolean;
}

export const boilerplateListOfDeps: IBoilerPlateDep[] = [
  { name: "redux", isDev: false },
  { name: "react-redux", isDev: false },
  { name: "react-thunk", isDev: false },
  { name: "react-router-dom", isDev: false },
];

export const APPLICATIONS_FOLDER_NAME: string = "apps";

export const repoPath: string =
  "https://github.com/khaliljerbi/react-boilerplate.git";
