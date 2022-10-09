import { ShortcutWebhook } from './entities/ShortcutWebhook';
import { octokit } from './github';

export async function handleWebhook(webhook: ShortcutWebhook): Promise<void> {
  await Promise.all(
    webhook.actions.map(async (action) => {
      if (action.action === 'create') {
        const projectId = action.project_id;
        if (!projectId) return;

        const project = webhook.references?.find(
          (r) => r.entity_type === 'project' && r.id === projectId
        );

        if (!project) return;
        if (project.name !== 'eXp Portal (SIDX App)') return;
        if (
          !webhook.references?.find(
            (r) => r.entity_type === 'group' && r.name === 'Engineering-FrontEnd'
          )
        )
          return;

        await octokit.rest.issues.create({
          body: `${action.description}\n\n${action.app_url}`,
          owner: 'showcaseidx',
          repo: 'consumer-ui',
          title: `${action.name} - sc${webhook.primary_id}`,
        });
      }
    })
  );
}
