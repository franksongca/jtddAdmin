import { ConfigService } from './../../services/config.service';
import { ActionsService } from './../../services/actions.service';

export class MenuShared {
  action;
  menu;

  constructor() {
    ConfigService.LoadConfig().subscribe((res) => {
      this.menu = res.menu;
    });
  }

  doAction(action) {
    alert(action);
    this.action = action;
    ActionsService.Action = action;
  }
}
