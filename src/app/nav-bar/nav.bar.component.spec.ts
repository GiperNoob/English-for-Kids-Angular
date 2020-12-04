import { DataService } from './../services/data.service';
import { NavBarComponent } from './nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BasicService } from './../services/basic.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('NavBarComponent', () => {
  let compoent: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      providers: [
        DataService,
        BasicService
      ],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(NavBarComponent);
    compoent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create NavBarComponent', () => {
    expect(compoent).toBeDefined();
  });
});
