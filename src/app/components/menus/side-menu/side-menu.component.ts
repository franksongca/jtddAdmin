import { Component, ElementRef } from '@angular/core';
import { MenuShared } from '../menu.shared';
import { ActionsService } from './../../../services/actions.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent extends MenuShared {
  thsElement;

  constructor(private elementRef: ElementRef) {
    super();

    this.thsElement = elementRef.nativeElement;

    ActionsService.onSideMenuToggle.subscribe((option) => {
      if (option && option.forceHide) {
        let found = false;
        this.thsElement.classList.forEach((classes) => {
          if (!found && classes.indexOf('closed') > -1) {
            found = true;
          }
        })

        if (!found) {
          this.thsElement.classList.toggle('closed');
        }

      } else {
        this.thsElement.classList.toggle('closed');
      }
    });
  }
}
