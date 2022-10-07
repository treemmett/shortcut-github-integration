import 'dotenv/config';
import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';
import { octokit } from './github';
import { logger } from './logger';
import { verifySignature } from './security';

export const shortcutGithubIntegration: HttpFunction = async (req, res) => {
  logger.info(req, 'New request');
  verifySignature(req);
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  res.send(`Hello, ${login}`);
};
