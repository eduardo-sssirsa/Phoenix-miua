import { TestBed } from '@angular/core/testing';

import { FridgebrandService } from './fridgebrand.service';

describe('FridgebrandService', () => {
  let service: FridgebrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FridgebrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
