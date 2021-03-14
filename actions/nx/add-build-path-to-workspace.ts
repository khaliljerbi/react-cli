import { readFileSync, writeFileSync } from "fs";

export function addBuildPathToWorkspaceJson(appName: string) {
  const data = readFileSync(`workspace.json`);
  const json = JSON.parse(data.toString());
  json.projects[
    `${appName}`
  ].targets.build.options.outputPath = `dist/apps/${appName}`;
  json.projects[`${appName}`].targets.build.outputs = ["{options.outputPath}"];
  writeFileSync(`workspace.json`, JSON.stringify(json, null, 2));
}
