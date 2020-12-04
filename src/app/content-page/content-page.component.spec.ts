import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from './../services/data.service';
import { GameService } from './../services/game.service';
import { ContentPageComponent } from './content-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ContentPageComponent', () => {
  let component: ContentPageComponent;
  let fixture: ComponentFixture<ContentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContentPageComponent,
      ],
      providers: [
        GameService,
        DataService,
      ],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(ContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create the ContentPageComponent', () => {
    expect(component).toBeDefined();
  });
});
