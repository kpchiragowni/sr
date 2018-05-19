import { TestBed, inject } from '@angular/core/testing';

import { InvestorsService } from './investors.service';

describe('InvestorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestorsService]
    });
  });

  it('should be created', inject([InvestorsService], (service: InvestorsService) => {
    expect(service).toBeTruthy();
  }));
});
