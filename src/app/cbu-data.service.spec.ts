import { TestBed } from '@angular/core/testing';

import { CbuDataService } from './cbu-data.service';

describe('CbuDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CbuDataService = TestBed.get(CbuDataService);
    expect(service).toBeTruthy();
  });
});
