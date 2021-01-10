import { TestBed } from '@angular/core/testing';

import { LoanFeaturesService } from './loan-features.service';

describe('LoanFeaturesService', () => {
  let service: LoanFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
