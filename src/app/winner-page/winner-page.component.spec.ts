import { BasicService } from './../services/basic.service';
import { WinnerPageComponent } from './winner-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TitlePageComponent', () => {
  let compoent: WinnerPageComponent;
  let fixture: ComponentFixture<WinnerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinnerPageComponent],
      providers: [
        BasicService,
      ],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(WinnerPageComponent);
    compoent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create WinnerPageComponent', () => {
    expect(compoent).toBeDefined();
  });
});
