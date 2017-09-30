import { TestBed, inject } from '@angular/core/testing';

import { InputVerifierService } from './input-verifier.service';

describe('InputVerifierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputVerifierService]
    });
  });

  it('should be created', inject([InputVerifierService], (service: InputVerifierService) => {
    expect(service).toBeTruthy();
  }));
});
