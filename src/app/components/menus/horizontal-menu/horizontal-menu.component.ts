import { Component } from '@angular/core';
import { MenuShared } from '../menu.shared';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent extends MenuShared {
  constructor() {
    super();
  }
}
