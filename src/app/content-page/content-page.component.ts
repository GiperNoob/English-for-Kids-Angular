import { GameService } from './../services/game.service';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {
  data: any;
  subscription: Subscription;

  constructor(
    private dataService: DataService,
    private activateRoute: ActivatedRoute,
    public gameService: GameService) { }

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(({ id }) => {
      this.data = this.dataService.getDate(id);
    });
  }
}
