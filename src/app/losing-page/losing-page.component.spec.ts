import { RouterTestingModule } from '@angular/router/testing';
import { BasicService } from './../services/basic.service';
import { LosingPageComponent } from './losing-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('LosingPageComponent', () => {
  let component: LosingPageComponent;
  let fixture: ComponentFixture<LosingPageComponent>;
  let basicService: BasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LosingPageComponent],
      providers: [BasicService],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(LosingPageComponent);
    component = fixture.componentInstance;

    basicService = TestBed.inject(BasicService);

    fixture.detectChanges();
  });

  it('should be create LosingPageComponent', () => {
    expect(component).toBeDefined();
  });

  // it('when OnInit init should be called new Audio(`test`) this.basicService.redirect', () => {
  //   component.ngOnInit();
  //   spyOn(basicService, 'redirect').and.callFake(() => {
  //     setTimeout(() => {
  //       basicService.isActive = true;
  //     });
  //   });
  //   fixture.detectChanges();
  //   expect(basicService.isActive).toBeTruthy();
  // });
});
