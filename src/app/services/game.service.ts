import { ICard } from './data.service';
import { of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
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

  public gettingOnArrayOfSoundsForGame(data: Array<ICard>): Array<string> {
    const soundsForGame = [];
    const arrayAudio = [];

    data.forEach((card) => {
      soundsForGame.push(card.audioSrc);
    });

    this.shuffle(soundsForGame).forEach(word => {
      arrayAudio.push({
        word,
        audio: new Audio(`../../assets/${word}`)
      });
    });

    return arrayAudio;
  }

  public playSound(arrayAudio: string[], currentWord: string | number): void {
    of(arrayAudio[currentWord])
      .pipe(
        delay(1000),
      ).subscribe(obj => obj.audio.play());
  }

  private shuffle(array: Array<string>): Array<string> {
    return array.sort(() => Math.random() - 0.5);
  }
}
