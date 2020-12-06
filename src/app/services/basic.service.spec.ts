import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { BasicService } from './basic.service';


describe('BasicService', () => {
  let basicService: BasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicService],
      imports: [RouterTestingModule]
    });

    basicService = TestBed.inject(BasicService);
  });

  it('should be create BasicService', () => {
    expect(basicService).toBeDefined();
  });

  it('when was call toggleClassMenuBurger isActive = false, by default isActive = true', () => {
    basicService.toggleClassMenuBurger();
    expect(basicService.isActive).toBeFalse();
  });

  it('when was call toggleClassMenuBurger isActive = true, by isActive = false', () => {
    basicService.toggleClassMenuBurger();
    basicService.toggleClassMenuBurger();
    expect(basicService.isActive).toBeTruthy();
  });
});
