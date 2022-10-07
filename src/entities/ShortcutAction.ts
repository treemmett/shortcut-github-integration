export interface ActionChange<T> {
  new: T;
  old: T;
}

export interface ActionAdds<T> {
  adds: T[];
}

export type EntityType = 'story-comment' | 'story' | 'epic';

export type Action = 'create' | 'update';

export type StoryType = 'feature' | 'bug' | 'chore';

export class ShortcutAction {
  public id = 0;

  public entity_type?: EntityType;

  public action?: Action;

  public name = '';

  public description?: string;

  public story_type?: StoryType;

  public app_url = '';

  public requested_by_id?: string;

  public group_id?: string;

  public workflow_state_id?: number;

  public follower_ids?: string[];

  public owner_ids?: string[];

  public position?: number;

  public project_id?: number;

  public changes?: Record<string, ActionChange<unknown> | ActionAdds<unknown>>;

  public text?: string;

  public author_id?: string;
}
