/* eslint-disable node/no-unpublished-import, node/no-unpublished-require */
import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const shortcutGithubIntegration: HttpFunction = (req, res) => {
  res.send('Hello, World');
};
