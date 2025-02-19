import { TestBed } from '@angular/core/testing';

import { OtpserviceService } from './otp.service';

describe('OtpserviceService', () => {
  let service: OtpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
