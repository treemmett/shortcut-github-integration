import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';
import {verifySignature} from './security';

export const shortcutGithubIntegration: HttpFunction = (req, res) => {
  verifySignature(req);
  res.send('Hello, World');
};
