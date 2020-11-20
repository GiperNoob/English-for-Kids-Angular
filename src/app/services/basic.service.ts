import { GameService } from './game.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
  public isActive = true;

  constructor(
    private router: Router,
    private gameService: GameService,
  ) { }

  public toggleClassMenuBurger(): void {
    this.isActive = !this.isActive;
  }

  public redirect(path: string): void {
    setTimeout(() => {
      this.router.navigate([path]);
      this.isActive = true;
      this.gameService.isPlay = false;
    }, 2500);
  }
}
