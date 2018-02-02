import { Component, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
// import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./../shared-modal.component.scss', 'logout-modal.component.scss']
})
export class LogoutModalComponent implements OnInit {
  public onClose: Subject<boolean>;

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
