import { GameService } from './../services/game.service';
import { DataService, ICard } from './../services/data.service';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentPageComponent implements OnInit, OnDestroy {
  id: string;
  data: Array<ICard>;
  subscription: Subscription;

  constructor(
    private dataService: DataService,
    public gameService: GameService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(({ id }) => {
      this.id = id;
      this.data = this.dataService.getData(id);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
