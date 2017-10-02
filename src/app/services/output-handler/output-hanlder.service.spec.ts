import { TestBed, inject } from '@angular/core/testing';

import { OutputHandlerService } from './output-handler.service';

describe('OutputHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutputHandlerService]
    });
  });

  it('should be created', inject([OutputHandlerService], (service: OutputHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
