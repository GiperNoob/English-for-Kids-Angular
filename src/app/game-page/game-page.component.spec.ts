import { RouterTestingModule } from '@angular/router/testing';
import { BasicService } from './../services/basic.service';
import { GameService } from './../services/game.service';
import { DataService } from './../services/data.service';
import { GamePageComponent } from './game-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('GamePageComponent', () => {
  let component: GamePageComponent;
  let fixture: ComponentFixture<GamePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamePageComponent],
      providers: [
        DataService,
        GameService,
        BasicService,
      ],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(GamePageComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should be create GamePageComponent', () => {
    expect(component).toBeDefined();
  });
});
