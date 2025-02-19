import { Component } from '@angular/core';
import { OtpService } from '../otpservice/otp.service';

@Component({
  selector: 'app-otp-request',
  templateUrl: './otp-request.component.html',
  styleUrls: ['./otp-request.component.scss']
})
export class OtpRequestComponent {
  email: string = '';
  otpSent: boolean = false;
  errorMessage:string ="";

  constructor(private readonly otpService:OtpService) {}

  onSubmit() {
    if (this.email) {
      this.otpService.sendOtp(this.email).subscribe(
        (response) => {
          console.log(response);
          this.otpSent = true; 
          this.errorMessage = '';
        },
        (error) => {
          console.error(error);
          this.errorMessage = error.message;
        }
      );
    }
  }

  resendOtp() {
    if (this.email) {
      this.otpService.sendOtp(this.email).subscribe(
        (response) => {
          console.log(response);
          this.errorMessage = '';
        },
        (error) => {
          console.error(error);
          this.errorMessage = error.message;
        }
      );
    }
  }
}
