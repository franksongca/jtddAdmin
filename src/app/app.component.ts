import { Component } from '@angular/core';
import { ConfigService } from './services/config.service';
import { ActionsService } from './services/actions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageIndexes;
  pageIndex = 0;

  constructor(private configService: ConfigService) {
    ConfigService.LoadConfig().subscribe((res) => {
      this.pageIndexes = res.pageIndexes;
    });

    ActionsService.onMenuItemSelected.subscribe((pageIndex) => {
      this.pageIndex = pageIndex;
    });
  }
}
