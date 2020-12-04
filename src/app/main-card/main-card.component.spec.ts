import { RouterTestingModule } from '@angular/router/testing';
import { BasicService } from './../services/basic.service';
import { GameService } from './../services/game.service';
import { MainCardComponent } from './main-card.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MainCardComponent', () => {
  let compoent: MainCardComponent;
  let fixture: ComponentFixture<MainCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCardComponent],
      providers: [
        GameService,
        BasicService
      ],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(MainCardComponent);
    compoent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create MainCardComponent', () => {
    expect(compoent).toBeDefined();
  });
});
