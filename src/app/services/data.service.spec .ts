import { DataService } from './data.service';
import { TestBed } from '@angular/core/testing';


describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
    });

    service = TestBed.inject(DataService);
  });

  it('should be create DataService', () => {
    expect(service).toBeDefined();
  });
});
