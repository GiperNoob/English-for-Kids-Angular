import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardComponent,
      ]
    });

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.card'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create the CardComponent', () => {
    expect(component).toBeDefined();
  });

  it('should isRotate by true', () => {
    component.rotateTrue();
    expect(component.isRotate).toBeTrue();
  });

  it('should isRotate by false', () => {
    component.rotateFalse();
    expect(component.isRotate).toBeFalse();
  });

  it('should call rotateTrue when clicked to rotate-icon', () => {
    de = fixture.debugElement.query(By.css('.rotate-icon'));
    spyOn(component, 'rotateTrue').and.callThrough();

    de.triggerEventHandler('click', null);
    expect(component.rotateTrue).toHaveBeenCalled();
  });

  it('should call rotateFalse when mouseleave to rotate-icon', () => {
    de = fixture.debugElement.query(By.css('.rotate-icon'));
    spyOn(component, 'rotateFalse').and.callThrough();

    de.triggerEventHandler('mouseleave', null);
    expect(component.rotateFalse).toHaveBeenCalled();
  });

  it('should added class rotate from card when isRotate by true', () => {
    component.isRotate = true;
    fixture.detectChanges();

    expect(el.classList.contains('rotate')).toBeTruthy();
  });

  it('should added class rotate from card when isRotate by false', () => {
    component.isRotate = false;
    fixture.detectChanges();

    expect(el.classList.contains('rotate')).toBeFalsy();
  });

  it('should call method mediaHandler when was clicked to card', () => {
    const mockEvent = {
      target: {
        localName: 'img',
        className: 'title-img'
      },
      srcElement: {
        alt: 'test',
      },
    };

    de.triggerEventHandler('click', mockEvent);
    spyOn(component, 'mediaHandler').and.callFake(() => {
      const audio: HTMLAudioElement = new Audio(`../../assets/audio/${mockEvent.srcElement.alt}.mp3`);
      audio.play();
    });
  });
});
