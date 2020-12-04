import { SwitchFieldComponent } from './switch-field.component';
import { GameService } from './../services/game.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SwitchFieldComponent', () => {
  let compoent: SwitchFieldComponent;
  let fixture: ComponentFixture<SwitchFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchFieldComponent],
      providers: [
        GameService,
      ],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(SwitchFieldComponent);
    compoent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create SwitchFieldComponent', () => {
    expect(compoent).toBeDefined();
  });
});
