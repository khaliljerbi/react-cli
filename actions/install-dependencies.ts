import { addDependency } from "../helpers/utils";
import {
  boilerplateListOfDeps,
  defaultListOfDeps,
  IBoilerPlateDep,
} from "../constants";
// install react deps to nx workspace
export const installDefaultDepsToNX = () => {
  defaultListOfDeps.forEach((dep: string) => {
    addDependency(dep, true);
  });
};

// install boilerplate dependencies
export const installBoilerplateDeps = () => {
  boilerplateListOfDeps.forEach((dep: IBoilerPlateDep) => {
    addDependency(dep.name, dep.isDev);
  });
};
