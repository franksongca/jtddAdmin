import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HorizontalMenuComponent } from './components/menus/horizontal-menu/horizontal-menu.component';
import { SideMenuComponent } from './components/menus/side-menu/side-menu.component';

import { ConfigService } from './services/config.service';
import { ActionsService } from './services/actions.service';
import { WebServicesService } from './services/web-service.service';
import { AuthInterceptor } from './services/auth-interceptor.service';

import { HomeComponent } from './components/pages/home/home.component';
import { ResourceManagementComponent } from './components/pages/resource-management/resource-management.component';
import { CarouselManagementComponent } from './components/pages/carousel-management/carousel-management.component';
import { MembersManagementComponent } from './components/pages/members-management/members-management.component';
import { StaffManagementComponent } from './components/pages/staff-management/staff-management.component';
import { ActivitiesLogsComponent } from './components/pages/activities-logs/activities-logs.component';

import { SimpleModalComponent } from './components/modals/simple/simple-modal.component';
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';
import { LogoutModalComponent } from './components/modals/logout/logout-modal.component';
import { InputModalComponent } from './components/modals/input-modal/input-modal.component';

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
    SimpleModalComponent,
    LoginModalComponent,
    LogoutModalComponent,
    InputModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    ConfigService,
    ActionsService,
    WebServicesService
  ],
  entryComponents: [
    SimpleModalComponent,
    LoginModalComponent,
    LogoutModalComponent,
    InputModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
