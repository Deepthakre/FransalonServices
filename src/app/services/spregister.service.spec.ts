import { TestBed } from '@angular/core/testing';

import { SpregisterService } from './spregister.service';

describe('SpregisterService', () => {
  let service: SpregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
