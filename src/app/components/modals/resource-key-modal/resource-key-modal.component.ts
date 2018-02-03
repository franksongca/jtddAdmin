import { Component, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
// import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { WebServicesService } from './../../../services/web-service.service';
import { ActionsService } from './../../../services/actions.service';

export interface OptionModel {
  option: Object;
}

@Component({
  selector: 'app-resource-key-modal',
  templateUrl: './resource-key-modal.component.html',
  styleUrls: ['./../shared-modal.component.scss', './resource-key-modal.component.scss']
})
export class ResourceKeyModalComponent implements OnInit {
  public onClose: Subject<any>;

  option;
  newKey;

  constructor(public modalRef: BsModalRef, private webServicesService: WebServicesService) { }

  ngOnInit() {
    this.onClose = new Subject();
  }

  close(e) {
    e.preventDefault();
    this.onClose.next(null);
    this.modalRef.hide();
  }

  submit(): void {
    this.webServicesService.updateTextResourceKey(this.option.resourceKey, this.newKey).subscribe((res) => {
      if (res['error'] === 3) {
        ActionsService.openModal('simple', {
          title: '警告',
          bodyMessage: '新的文本资源键已经存在，请使用其它键值。',
          type: 'others',
          cancelBtnText: '确认',
          icon: 'warning'
        });
      } else {
        ActionsService.updateResourceKey({oldKey: this.option.resourceKey, newKey: this.newKey});
        // this.onClose.next({oldKey: this.option.resourceKey, newKey: this.newKey});
        this.modalRef.hide();
      }
    });
  }

  validate() {
    const refexp = /^[\w\d_.-]+$/;   // /^\w+$/;
    return this.newKey && refexp.test(this.newKey);
  }

}
