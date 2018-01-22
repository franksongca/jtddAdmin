import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HorizontalMenuComponent } from './components/menus/horizontal-menu/horizontal-menu.component';
import { SideMenuComponent } from './components/menus/side-menu/side-menu.component';

import { ConfigService } from './services/config.service';
import { ActionsService } from './services/actions.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HorizontalMenuComponent,
    SideMenuComponent,
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
