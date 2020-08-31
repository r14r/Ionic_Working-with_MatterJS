import { TestBed } from '@angular/core/testing';

import { MatterLibService } from './matter-lib.service';

describe('MatterLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatterLibService = TestBed.get(MatterLibService);
    expect(service).toBeTruthy();
  });
});
