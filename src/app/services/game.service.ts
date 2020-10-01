import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  isPlay: boolean;

  isPlayTrue(evt: { target: { checked: boolean; }; }): void {
    this.isPlay = evt.target.checked;
  }

  isPlayFalse(evt: { target: { checked: boolean; }; }): void {
    this.isPlay = !evt.target.checked;
  }

  startGame(): void { }
}
