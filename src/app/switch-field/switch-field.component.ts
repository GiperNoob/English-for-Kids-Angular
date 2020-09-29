import { GameService } from './../services/game.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-field',
  templateUrl: './switch-field.component.html',
  styleUrls: ['./switch-field.component.scss']
})
export class SwitchFieldComponent {
  constructor(public gameService: GameService) { }
}
