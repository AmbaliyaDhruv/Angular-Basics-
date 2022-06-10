import { TestBed } from '@angular/core/testing';

import { AppCallService } from './app-call.service';

describe('AppCallService', () => {
  let service: AppCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
