import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
// import 'rxjs/add/observable/throw'
// import 'rxjs/add/operator/catch';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({ headers: req.headers.set('Authorization', 'Basic ZnJhbmtzOmZyYW5rc0BrYXRobw==')});

    return next.handle(authReq);
  }
}
