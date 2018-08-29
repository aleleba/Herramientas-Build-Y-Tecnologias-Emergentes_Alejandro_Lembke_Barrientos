import { TestBed, inject } from '@angular/core/testing';

import { FetchLogInPromiseService } from './fetch-log-in-promise.service';

describe('FetchLogInPromiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchLogInPromiseService]
    });
  });

  it('should be created', inject([FetchLogInPromiseService], (service: FetchLogInPromiseService) => {
    expect(service).toBeTruthy();
  }));
});
