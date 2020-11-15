import { ICard } from './data.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(
    private location: Location,
    private router: Router,
  ) { }

  public isPlay: boolean;
  public subscription: Subscription;

  public isPlayTrue(evt: { target: { checked: boolean; }; }): void {
    this.isPlay = evt.target.checked;
  }

  public isPlayFalse(evt: { target: { checked: boolean; }; }): void {
    if (this.router.url.match('game-page')) {
      this.location.back();
    }

    this.isPlay = !evt.target.checked;
  }

  private shuffle(array: Array<string>): Array<string> {
    return array.sort(() => Math.random() - 0.5);
  }

  public gettingOnArrayOfSoundsForGame(data: Array<ICard>): Array<string> {
    const soundsForGame = [];

    data.forEach((card) => {
      soundsForGame.push(card.audioSrc);
    });

    return this.shuffle(soundsForGame);
  }

  public startGame(): void { }
}
