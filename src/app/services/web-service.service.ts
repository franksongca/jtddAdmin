import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable()
export class WebServicesService {
  config;
  webServiceUrl;

  constructor(private configService: ConfigService, private http: HttpClient) {
    ConfigService.LoadConfig().subscribe((res) => {
      this.config = res;
      this.webServiceUrl = res.environment === 'local' ? res.webServerLocalURL.toString() : res.webServerRemoteURL.toString();
    });
  }

  login(cred) {
    return this.http.post(this.webServiceUrl + 'login', cred);
  }

  updateTextResourceKey(oldKey, newKey) {
    return this.http.post(this.webServiceUrl + 'update',
      {
        action: 'update-resource-text-key',
        token: ConfigService.LoginInfo.token,
        oldKey: oldKey,
        newKey: newKey
      }
    );
  }

  // shutdownProcess(id) {
  //   return this.http.get(this.config.webServerURL + ':' + this.config.port + '/api/shutdown/:' + id);
  // }
  //
  // createProcess(id, type, version) {
  //   return this.http.get(this.config.webServerURL + ':' + this.config.port + '/api/create/:' + encodeURIComponent(id) + '/:' + type + '/:' + version);
  // }

}
