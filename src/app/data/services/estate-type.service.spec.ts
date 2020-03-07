import { TestBed } from '@angular/core/testing';

import { EstateTypeService } from './estate-type.service';

describe('EstateTypeService', () => {
  let service: EstateTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstateTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
