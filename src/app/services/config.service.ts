import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {
  static http;
  static ConfigData;

  constructor(private http: HttpClient) {
    ConfigService.http = http;
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
