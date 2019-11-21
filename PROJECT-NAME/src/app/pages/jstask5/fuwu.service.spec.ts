import { TestBed } from '@angular/core/testing';

import { FuwuService } from './fuwu.service';

describe('FuwuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuwuService = TestBed.get(FuwuService);
    expect(service).toBeTruthy();
  });
});
