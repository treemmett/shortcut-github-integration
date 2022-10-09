import 'dotenv/config';
import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';
import { ShortcutWebhook } from './entities/ShortcutWebhook';
import { octokit } from './github';
import { logger } from './logger';

export const shortcutGithubIntegration: HttpFunction = async (req, res) => {
  logger.info({ body: req.body, req }, 'New request');

  const payload: ShortcutWebhook = req.body;

  await Promise.all(
    payload.actions.map(async (action) => {
      if (action.action === 'create') {
        const projectId = action.project_id;
        if (!projectId) return;

        const project = payload.references?.find(
          (r) => r.entity_type === 'project' && r.id === projectId
        );

        if (!project) return;
        if (project.name !== 'eXp Portal (SIDX App)') return;
        if (
          !payload.references?.find(
            (r) => r.entity_type === 'group' && r.name === 'Engineering-FrontEnd'
          )
        )
          return;

        await octokit.rest.issues.create({
          body: `${action.description}\n\n${action.app_url}`,
          owner: 'showcase-idx',
          repo: 'consumer-ui',
          title: action.name,
        });
      }
    })
  );

  res.send('ok');
};
