import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
  public isActive = false;

  public toggleClassMenuBurger(): void {
    this.isActive = !this.isActive;
  }
}
