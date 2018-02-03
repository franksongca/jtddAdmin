import { Component } from '@angular/core';
import { ConfigService } from './services/config.service';
import { ActionsService } from './services/actions.service';
import { WebServicesService } from './services/web-service.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SimpleModalComponent } from './components/modals/simple/simple-modal.component';
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';
import { LogoutModalComponent } from './components/modals/logout/logout-modal.component';
import { ResourceKeyModalComponent } from './components/modals/resource-key-modal/resource-key-modal.component';
import { InputModalComponent } from './components/modals/input-modal/input-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bsModalRef: BsModalRef;
  bsModalRef1: BsModalRef;

  pageIndexes;
  pageIndex = 0;

  constructor(
    private configService: ConfigService,
    private modalService: BsModalService,
    private webServicesService: WebServicesService
  ) {
    ConfigService.LoadConfig().subscribe((res) => {
      this.pageIndexes = res.pageIndexes;
    });

    ActionsService.onMenuItemSelected.subscribe((pageIndex) => {
      this.pageIndex = pageIndex;
    });

    ActionsService.onOpenModal.subscribe((res) => {
      switch (res.name) {
        case 'login':
          this.openLoginModal();
          break;
        case 'logout':
          this.openLogoutModal();
          break;
        case 'resourcekey':
          this.openResourceKeyModal(res['option']);
          break;
        case 'simple':
          this.openSimpleModal(res['option']);
          break;
      }
    });
  }

  openSimpleModal(option) {
    this.bsModalRef1 = this.modalService.show(SimpleModalComponent);
    this.bsModalRef1.content.option = option;

    this.bsModalRef1.content.onClose.subscribe(result => {
      console.log('results', result);
      if (result.type === 'not-login-warning') {
        this.openLoginModal();
      }
    });
  }

  openLoginModal() {
    this.bsModalRef = this.modalService.show(LoginModalComponent);

    this.bsModalRef.content.onClose.subscribe(result => {
      console.log('results', result);
      if (result) {
        setTimeout(() => {
          this.webServicesService.login(result).subscribe((res) => {
            if (+res['error']) {
              // TODO handle login error !!!!!!!
            } else {
              ConfigService.LoginInfo = res;
            }
          });
        });
      }
    });
  }

  openLogoutModal() {
    this.bsModalRef = this.modalService.show(LogoutModalComponent);

    this.bsModalRef.content.onClose.subscribe(result => {
      console.log('results', result);
      if (result) {
        setTimeout(() => {
          ConfigService.Logout();
        });
      }
    });

  }

  openResourceKeyModal(option) {
    this.bsModalRef = this.modalService.show(ResourceKeyModalComponent);
    this.bsModalRef.content.option = option;
  }

  openInputModal() {
    this.bsModalRef = this.modalService.show(InputModalComponent);

    this.bsModalRef.content.onClose.subscribe(result => {
      console.log('results', result);
      if (result) {
        setTimeout(() => {
          alert('logout: ');
        });
      }
    });

  }
}
