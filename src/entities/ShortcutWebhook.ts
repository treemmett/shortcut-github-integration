import { ShortcutAction } from './ShortcutAction';
import { ShortcutReference } from './ShortcutReference';

export class ShortcutWebhook {
  public id = '';

  public changed_at = new Date();

  public primary_id = 0;

  public member_id = '';

  public version = '';

  public actions: ShortcutAction[] = [];

  public reference: ShortcutReference[] = [];
}
