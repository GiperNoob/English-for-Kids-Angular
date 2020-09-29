import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  isPlay: boolean;
  isRepeat = false;

  isPlayTrue(evt: { target: { checked: boolean; }; }): void {
    this.isPlay = evt.target.checked;
    console.log(this.isPlay);
  }

  isPlayFalse(evt: { target: { checked: boolean; }; }): void {
    this.isPlay = !evt.target.checked;
  }

  startGame(): void {
    this.isRepeat = true;
  }
}
