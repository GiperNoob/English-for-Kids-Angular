import { BasicService } from './../services/basic.service';
import { GameService } from './../services/game.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent {

  @Input() title: string;
  @Input() srcPath: string;

  constructor(
    public gameService: GameService,
    public basicService: BasicService,
  ) { }
}
