import { RouterTestingModule } from '@angular/router/testing';
import { BasicService } from './../services/basic.service';
import { GameService } from './../services/game.service';
import { MainCardComponent } from './main-card.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('MainCardComponent', () => {
  let compoent: MainCardComponent;
  let fixture: ComponentFixture<MainCardComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let basicService: BasicService;

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

    de = fixture.debugElement.query(By.css('.main-card'));
    el = de.nativeElement;

    basicService = TestBed.inject(BasicService);
    fixture.detectChanges();
  });

  it('should be create MainCardComponent', () => {
    expect(compoent).toBeDefined();
  });

  it('when clicked main-card basicService.toggleClassMenuBurger toHaveBeenCalled, basicService.isActive = false', () => {
    de.triggerEventHandler('click', {});
    spyOn(basicService, 'toggleClassMenuBurger').and.callThrough();

    expect(basicService.isActive).toBeFalse();
  });
});
