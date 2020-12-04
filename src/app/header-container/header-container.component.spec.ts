import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderContainerComponent } from './header-container.component';

describe('HeaderContainerComponent', () => {
  let compoent: HeaderContainerComponent;
  let fixture: ComponentFixture<HeaderContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderContainerComponent],
    });

    fixture = TestBed.createComponent(HeaderContainerComponent);
    compoent = fixture.componentInstance;
  });

  it('should be create HeaderContainerComponent', () => {
    expect(compoent).toBeDefined();
  });
});
