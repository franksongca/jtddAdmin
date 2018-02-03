import { Component, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
// import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./../shared-modal.component.scss', './simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  public onClose: Subject<any>;

  option;

  constructor(public modalRef: BsModalRef) {

  }

  ngOnInit() {
    this.onClose = new Subject();
  }

  confirm(): void {

    this.onClose.next({result: true, type: this.option.type});
    this.modalRef.hide();
  }

  close(): void {
    this.onClose.next({result: false, type: this.option['type']});
    this.modalRef.hide();
  }
}
