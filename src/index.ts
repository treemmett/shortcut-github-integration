import 'dotenv/config';
import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';
import { logger } from './logger';
import { handleWebhook } from './shortcut';

export const shortcutGithubIntegration: HttpFunction = async (req, res) => {
  logger.info({ body: req.body, req }, 'New request');
  await handleWebhook(req.body);
  res.send('ok');
};
