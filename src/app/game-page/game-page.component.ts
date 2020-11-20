import { BasicService } from './../services/basic.service';
import { GameService } from './../services/game.service';
import { DataService, ICard } from './../services/data.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

export interface IStar {
  src: string;
}

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit, AfterViewInit {
  public subscription: Subscription;
  public arrayOfSounds: Array<string>;
  public data: Array<ICard>;
  public stars: Array<IStar> = [];

  private currentWord = 0;

  constructor(
    private dataService: DataService,
    private gameService: GameService,
    private basicService: BasicService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(({ id }) => {
      this.data = this.dataService.getData(id);
    });

    this.arrayOfSounds = this.gameService.gettingOnArrayOfSoundsForGame(this.data);
  }

  ngAfterViewInit(): void {
    this.gameService.playSound(this.arrayOfSounds, this.currentWord);
  }

  public clickEventHandler(evt: { path: { alt: string }; target: { style: { opacity: string } } }): void {
    if (this.arrayOfSounds[this.currentWord][`word`].match(evt.path[0].alt) &&
      evt.target.style.opacity !== '0.5') {
      evt.target.style.opacity = '0.5';
      this.currentWord += 1;
      this.gameService.playSound(this.arrayOfSounds, this.currentWord);

      new Audio('../../assets/audio/correct.mp3').play();
      this.starPush('star-win.svg');
    } else if (evt.target.style.opacity !== '0.5') {
      new Audio('../../assets/audio/error.mp3').play();
      this.starPush('star-error.svg');
    }

    if (this.currentWord === 8 && !this.stars.find(star => star.src === 'star-error.svg')) {
      this.basicService.redirect('winner');
    } else if (this.currentWord === 8 && this.stars.find(star => star.src === 'star-error.svg')) {
      this.basicService.redirect('losing');
    }
  }

  public repeatEventHandler(): void {
    this.gameService.playSound(this.arrayOfSounds, this.currentWord);
  }

  private starPush(src: string): void {
    this.stars.push({ src });
  }
}
