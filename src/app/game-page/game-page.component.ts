import { GameService } from './../services/game.service';
import { DataService, ICard } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  public subscription: Subscription;
  public data: Array<ICard>;
  public arrayOfSounds: Array<string>;

  constructor(
    private dataService: DataService,
    private gameService: GameService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(({ id }) => {
      this.data = this.dataService.getData(id);
    });

    this.arrayOfSounds = this.gameService.gettingOnArrayOfSoundsForGame(this.data);
  }

}
