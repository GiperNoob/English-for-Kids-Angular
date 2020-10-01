import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-for-game',
  templateUrl: './card-for-game.component.html',
  styleUrls: ['./card-for-game.component.scss']
})
export class CardForGameComponent {
  @Input() srcPath: string;
  @Input() word: string;
}
