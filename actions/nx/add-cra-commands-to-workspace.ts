import { execCommand } from "../../helpers/utils";

export function addCRACommandsToWorkspaceJson(appName: string) {
  execCommand(
    `npx nx g @nrwl/workspace:run-commands serve \
      --project ${appName} \
      --command "node ../../node_modules/react-app-rewired/bin/index.js start" \
      --cwd "apps/${appName}"`
  );

  execCommand(
    `npx nx g @nrwl/workspace:run-commands build \
      --project ${appName} \
      --command "node ../../node_modules/react-app-rewired/bin/index.js build" \
      --cwd "apps/${appName}"`
  );

  execCommand(
    `npx nx g @nrwl/workspace:run-commands lint \
      --project ${appName} \
      --command "node ../../node_modules/.bin/eslint src/**/*.tsx src/**/*.ts" \
      --cwd "apps/${appName}"`
  );

  execCommand(
    `npx nx g @nrwl/workspace:run-commands test \
      --project ${appName} \
      --command "node ../../node_modules/react-app-rewired/bin/index.js test --watchAll=false" \
      --cwd "apps/${appName}"`
  );
}
