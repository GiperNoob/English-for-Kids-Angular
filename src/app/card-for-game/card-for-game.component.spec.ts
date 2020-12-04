import { CardForGameComponent } from './card-for-game.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CardForGameComponent', () => {
  let component: CardForGameComponent;
  let fixture: ComponentFixture<CardForGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardForGameComponent,
      ]
    });

    fixture = TestBed.createComponent(CardForGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create the CardForGameComponent', () => {
    expect(component).toBeDefined();
  });
});
