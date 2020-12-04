import { RouterTestingModule } from '@angular/router/testing';
import { BasicService } from './../services/basic.service';
import { LosingPageComponent } from './losing-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('LosingPageComponent', () => {
  let compoent: LosingPageComponent;
  let fixture: ComponentFixture<LosingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LosingPageComponent],
      providers: [BasicService],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(LosingPageComponent);
    compoent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create LosingPageComponent', () => {
    expect(compoent).toBeDefined();
  });
});
