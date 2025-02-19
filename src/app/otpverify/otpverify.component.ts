import { Component } from '@angular/core';
import { OtpService } from '../otpservice/otp.service';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.scss']
})
export class OtpVerifyComponent {
  email: string = '';
  otp: string = '';
  verificationResult: string = '';
  errorMessage: string = '';

  constructor(private otpService: OtpService) {}

  onVerify() {
    if (this.email && this.otp) {
      this.otpService.verifyOtp({email:this.email, otp:this.otp}).subscribe(
        (response) => {
          console.log(response);
          this.verificationResult = 'OTP is valid!';
          this.errorMessage = '';
        },
        (error) => {
          console.error(error);
          this.verificationResult = '';
          this.errorMessage = error.message;
        }
      );
    }
  }
}
