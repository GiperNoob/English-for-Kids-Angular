import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isActive = false;
  toggleClassMenuBurger(): void {
    this.isActive = !this.isActive;
  }
}
