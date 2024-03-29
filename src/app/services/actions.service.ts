import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ActionsService {
  static onMenuItemSelected: EventEmitter<Number> = new EventEmitter();
  static onSideMenuToggle: EventEmitter<any> = new EventEmitter();
  static onSideMenuStatusUpdated: EventEmitter<number> = new EventEmitter();
  static onOpenModal: EventEmitter<any> = new EventEmitter();
  static onResourceKeyUpdated: EventEmitter<any> = new EventEmitter();
  protected static SideMenuStatus = 0;

  constructor() { }

  private static _action;

  private static updateStatus() {
    ActionsService.onSideMenuStatusUpdated.emit(ActionsService.SideMenuStatus);
  }

  public static get Action() {
    return ActionsService._action;
  }

  public static set Action(action) {
    ActionsService._action = action;
    ActionsService.onMenuItemSelected.emit(action);
    ActionsService.hideSideMenu();
  }

  public static doAction(action) {
    ActionsService.onMenuItemSelected.emit(action);
  }

  public static toggleSideMenu() {
    ActionsService.SideMenuStatus = 1 - ActionsService.SideMenuStatus;
    ActionsService.onSideMenuToggle.emit();
    ActionsService.updateStatus();
  }

  public static hideSideMenu() {
    ActionsService.SideMenuStatus = 0;
    ActionsService.onSideMenuToggle.emit({forceHide: true});
    ActionsService.updateStatus();
  }

  public static openModal(name, option?, callback?) {
    ActionsService.onOpenModal.emit({name: name, option: option});
  }

  public static updateResourceKey(result) {
    ActionsService.onResourceKeyUpdated.emit(result);
  }
}
