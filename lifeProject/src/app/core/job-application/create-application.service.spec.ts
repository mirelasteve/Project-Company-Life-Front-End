import { TestBed, inject } from '@angular/core/testing';

import { CreateApplicationService } from './create-application.service';

describe('CreateApplicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateApplicationService]
    });
  });

  it('should be created', inject([CreateApplicationService], (service: CreateApplicationService) => {
    expect(service).toBeTruthy();
  }));
});
