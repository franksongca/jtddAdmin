import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {
  static http;
  static ConfigData;
  static onLoggedIn: EventEmitter<any> = new EventEmitter();
  static _loginInfo;
  constructor(private http: HttpClient) {
    ConfigService.http = http;
  }

  static Logout() {
    ConfigService._loginInfo = null;
    ConfigService.onLoggedIn.emit(false);
  }

  static isLoginned() {
    return ConfigService._loginInfo !== undefined;
  }

  static set LoginInfo(val) {
    ConfigService._loginInfo = val;
    ConfigService.onLoggedIn.emit(true);
  }

  static get LoginInfo() {
    return ConfigService._loginInfo;
  }

  static LoadConfig(): Observable<any> {
    let observable;

    if (ConfigService.ConfigData) {
      observable = Observable.create(ConfigService.ConfigData);
    } else {
      observable = ConfigService.http.get('./assets/data/app.config.json');

      observable.subscribe((response) => {
          ConfigService.ConfigData = response;
        },
        () => console.log('error occurs when loading app.config.json')
      );
    }

    return observable;
  }
}
