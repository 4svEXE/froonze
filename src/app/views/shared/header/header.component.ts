import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpenMenu: boolean = false;

  onCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.isOpenMenu = checkbox.checked;
  }
}
