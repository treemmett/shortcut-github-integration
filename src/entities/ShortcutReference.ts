export type EntityType = 'project' | 'workflow-state' | 'workflow-group';

export class ShortcutReference {
  public id = 0;

  public name = '';

  public type?: string;

  public entity_type?: string;
}
