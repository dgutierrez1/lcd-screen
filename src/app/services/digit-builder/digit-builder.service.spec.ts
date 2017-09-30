import { TestBed, inject } from '@angular/core/testing';

import { DigitBuilderService } from './digit-builder.service';

describe('DigitBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DigitBuilderService]
    });
  });

  it('should be created', inject([DigitBuilderService], (service: DigitBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
