import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActionsService } from './../../services/actions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {
    ActionsService.onSideMenuStatusUpdated.subscribe((status) => {
      this.sideMenuStatus = status;
    });
  }
  sideMenuStatus;

  ngOnInit() {
    this.hideSideMenu();
  }

  toggleMenu() {
    ActionsService.toggleSideMenu();
  }

  hideSideMenu() {
    ActionsService.hideSideMenu();
  }
}
