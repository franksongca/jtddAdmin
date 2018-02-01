import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActionsService } from './../../services/actions.service';
import { ConfigService } from './../../services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sideMenuStatus;
  loggedIn = ConfigService.isLoginned();

  constructor() {
    ActionsService.onSideMenuStatusUpdated.subscribe((status) => {
      this.sideMenuStatus = status;
    });

    ConfigService.onLoggedIn.subscribe((isLoggedIn) => {
      this.loggedIn = isLoggedIn;
    });
  }

  ngOnInit() {
    this.hideSideMenu(null);

    this.loggedIn = ConfigService.isLoginned();
  }

  toggleMenu(e) {
    e.preventDefault();
    ActionsService.toggleSideMenu();
  }

  hideSideMenu(e) {
    if (e) {
      e.preventDefault();
    }
    ActionsService.hideSideMenu();
  }

  logInOut() {
    if (!this.loggedIn) {
      ActionsService.openLoginModal();
    } else {
      ConfigService.Logout();
      // this.loggedIn = false;

    }
  }
}
