import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActionsService } from './../../services/actions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sideMenuStatus;
  loggedIn;

  constructor() {
    ActionsService.onSideMenuStatusUpdated.subscribe((status) => {
      this.sideMenuStatus = status;
    });
  }

  ngOnInit() {
    this.hideSideMenu(null);
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
    }
  }
}
