import { TestBed, inject } from '@angular/core/testing';

import { CentralControllerService } from './central-controller.service';

describe('CentralControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentralControllerService]
    });
  });

  it('should be created', inject([CentralControllerService], (service: CentralControllerService) => {
    expect(service).toBeTruthy();
  }));
});
