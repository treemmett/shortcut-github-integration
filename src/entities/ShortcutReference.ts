export type EntityType = 'project' | 'workflow-state' | 'workflow-group';

export class ShortcutReference {
  public id = 0;

  public entity_name = '';

  public name = '';

  public type?: string;
}
