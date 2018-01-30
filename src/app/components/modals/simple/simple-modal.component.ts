import { Component, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
// import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  options = {
    title: '',
    bodyText: '',
    buttonText: {
      confirm: 'Yes',
      decline: 'No'
    },
    singleButton: false,
    type: 'alert'
  }
  title: string = 'default title';
  bodyText: string = 'default body';

  public onClose: Subject<boolean>;

  constructor(public modalRef: BsModalRef) {

  }

  ngOnInit() {
    this.onClose = new Subject();
  }

  confirm(): void {
    this.onClose.next(true);
    this.modalRef.hide();
  }

  decline(): void {
    this.onClose.next(false);
    this.modalRef.hide();
  }
}
