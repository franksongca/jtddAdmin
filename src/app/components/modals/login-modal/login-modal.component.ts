import { Component, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
// import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  public onClose: Subject<any>;

  loginPayload = {
    userName: '',
    password: ''
  }

  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
    this.onClose = new Subject();
  }

  close(e) {
    e.preventDefault();
    this.onClose.next(null);
    this.modalRef.hide();
  }

  submit(): void {
    this.onClose.next(this.loginPayload);
    this.modalRef.hide();
  }

}
