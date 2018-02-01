import { Component } from '@angular/core';
import { ConfigService } from './services/config.service';
import { ActionsService } from './services/actions.service';
import { WebServicesService } from './services/web-service.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SimpleModalComponent } from './components/modals/simple/simple-modal.component';
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';

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

    ActionsService.onOpenLoginModal.subscribe(() => {
      this.openLoginModal();
    });
  }

  openShutdownModal(id) {
    this.bsModalRef = this.modalService.show(SimpleModalComponent);
    this.bsModalRef.content.options = {
      title: 'Shutdown Process',
      bodyText: 'Are you sure to shutdown the process [ ' + id + ' ] ?',
      singleButton: false,
      buttonText: {
        confirm: 'Yes',
        decline: 'No'
      },
      type: 'question-sign'
    };

    this.bsModalRef.content.onClose.subscribe(result => {
      console.log('results', result);
      if (result) {
        this.openSimpleModal('Error', 'Cannot shutdown the process [' + id + '].', 'alert');
        // setTimeout(() => {
        //   this.webServicesService.shutdownProcess(id).subscribe((r) => {
        //     if (r['error'] === 0) {
        //       this.removeWorkerProcess(id);
        //     } else {
        //       this.openSimpleModal('Error', 'Cannot shutdown the process [' + id + '].', 'alert');
        //     }
        //   });
        // });
      }
    });
  }

  openSimpleModal(title, message, type?) {
    this.bsModalRef1 = this.modalService.show(SimpleModalComponent);
    this.bsModalRef1.content.options = {
      title: title,
      bodyText: message,
      singleButton: true,
      buttonText: {
        confirm: '',
        decline: 'OK'
      },
      type: type
    };
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

}
