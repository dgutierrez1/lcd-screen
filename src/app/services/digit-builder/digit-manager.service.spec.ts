import { TestBed, inject } from '@angular/core/testing';

import { DigitManagerService } from './digit-manager.service';

describe('DigitManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DigitManagerService]
    });
  });

  it('should be created', inject([DigitManagerService], (service: DigitManagerService) => {
    expect(service).toBeTruthy();
  }));
});
