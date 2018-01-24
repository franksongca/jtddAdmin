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

  doAction(e, action) {
    e.preventDefault();
    this.action = action;
    ActionsService.Action = action;
  }
}
