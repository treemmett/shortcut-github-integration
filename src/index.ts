import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';
import {verifySignature} from './security';
import {logger} from './logger';

export const shortcutGithubIntegration: HttpFunction = (req, res) => {
  logger.info('New request', {req});
  verifySignature(req);
  res.send('Hello, World');
};
