export interface ActionChange<T> {
  new: T;
  old: T;
}

export interface ActionAdds<T> {
  adds: T[];
}

export class ShortcutAction {
  public id = 0;

  public entity_type = '';

  public action = '';

  public name = '';

  public story_type = '';

  public app_url = '';

  public changes: Record<string, ActionChange<unknown> | ActionAdds<unknown>> =
    {};
}
