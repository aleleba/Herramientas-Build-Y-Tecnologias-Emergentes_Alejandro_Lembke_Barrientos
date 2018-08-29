import { TestBed, inject } from '@angular/core/testing';

import { FetchProductosPromiseService } from './fetch-productos-promise.service';

describe('FetchProductosPromiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchProductosPromiseService]
    });
  });

  it('should be created', inject([FetchProductosPromiseService], (service: FetchProductosPromiseService) => {
    expect(service).toBeTruthy();
  }));
});
