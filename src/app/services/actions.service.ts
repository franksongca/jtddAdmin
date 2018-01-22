import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ActionsService {
  static onMenuItemSelected: EventEmitter<Number> = new EventEmitter();
  static onSideMenuToggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  private static _action;

  public static get Action() {
    return ActionsService._action;
  }

  public static set Action(action) {
    ActionsService._action = action;
    ActionsService.onMenuItemSelected.emit(action);
  }

  public static doAction(action) {
    ActionsService.onMenuItemSelected.emit(action);
  }

  public static toggleSideMenu() {
    ActionsService.onSideMenuToggle.emit();
  }

  public static hideSideMenu() {
    ActionsService.onSideMenuToggle.emit({forceHide: true});
  }

}
