import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActionsService } from './../../services/actions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  sideMenuStatus = 0;

  ngOnInit() {
    this.hideSideMenu();
  }

  toggleMenu() {
    this.sideMenuStatus = 1 - this.sideMenuStatus;
    ActionsService.toggleSideMenu();
  }

  hideSideMenu() {
    this.sideMenuStatus = 0;
    ActionsService.hideSideMenu();
  }
}
