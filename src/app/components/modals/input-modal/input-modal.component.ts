import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
// import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss']
})
export class InputModalComponent implements OnInit {
  public onClose: Subject<boolean>;

  item = {
    id: 1000,
    resourceKey: 'TEXT_KEY_A',
    createdBy: 'Frank Song',
    createdOn: '2018-10-10',
    lastEditedBy: 'Frank Song',
    lastEditedOn: '2018-10-10',
    content: 'content text'
  };

  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
    this.onClose = new Subject();
  }

  close(e) {
    e.preventDefault();
    this.onClose.next(false);
    this.modalRef.hide();
  }

  submit(): void {
    this.onClose.next(true);
    this.modalRef.hide();
  }

}
