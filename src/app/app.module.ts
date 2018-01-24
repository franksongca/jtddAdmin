import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HorizontalMenuComponent } from './components/menus/horizontal-menu/horizontal-menu.component';
import { SideMenuComponent } from './components/menus/side-menu/side-menu.component';

import { ConfigService } from './services/config.service';
import { ActionsService } from './services/actions.service';
import { HomeComponent } from './components/pages/home/home.component';
import { ResourceManagementComponent } from './components/pages/resource-management/resource-management.component';
import { CarouselManagementComponent } from './components/pages/carousel-management/carousel-management.component';
import { MembersManagementComponent } from './components/pages/members-management/members-management.component';
import { StaffManagementComponent } from './components/pages/staff-management/staff-management.component';
import { ActivitiesLogsComponent } from './components/pages/activities-logs/activities-logs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HorizontalMenuComponent,
    SideMenuComponent,
    HomeComponent,
    ResourceManagementComponent,
    CarouselManagementComponent,
    MembersManagementComponent,
    StaffManagementComponent,
    ActivitiesLogsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    ActionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
