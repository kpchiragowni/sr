import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InvestorsService } from './investors.service';

describe('InvestorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ InvestorsService ],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', inject([InvestorsService], (service: InvestorsService) => {
    expect(service).toBeTruthy();
  }));
});
