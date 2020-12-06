import { RouterTestingModule } from '@angular/router/testing';
import { GameService } from './game.service';
import { TestBed } from '@angular/core/testing';


describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService],
      imports: [RouterTestingModule]
    });

    service = TestBed.inject(GameService);
  });

  it('should be create GameService', () => {
    expect(service).toBeDefined();
  });

  it('when was call isPlayTrue isPlay = true', () => {
    const mockEvt = {
      target: {
        checked: true,
      },
    };

    service.isPlayTrue(mockEvt);
    expect(service.isPlay).toBeTrue();
  });

  it('when was call isPlayFalse isPlay = false', () => {
    const mockEvt = {
      target: {
        checked: true,
      },
    };

    service.isPlayFalse(mockEvt);
    expect(service.isPlay).toBeFalse();
  });

});
