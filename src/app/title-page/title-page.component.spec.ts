import { DataService } from './../services/data.service';
import { TitlePageComponent } from './title-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TitlePageComponent', () => {
  let compoent: TitlePageComponent;
  let fixture: ComponentFixture<TitlePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitlePageComponent],
      providers: [
        DataService,
      ],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(TitlePageComponent);
    compoent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create TitlePageComponent', () => {
    expect(compoent).toBeDefined();
  });
});
