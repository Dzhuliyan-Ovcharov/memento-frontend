import { TestBed } from '@angular/core/testing';

import { AdTypeService } from './ad-type.service';

describe('AdTypeService', () => {
  let service: AdTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
