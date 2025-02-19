import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OtpService } from '../otpservice/otp.service';

@Component({
  selector: 'app-otp-verify',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './otp-verify.component.html',
  styleUrl: './otp-verify.component.scss'
})
export class OtpVerifyComponent {
  email: string = '';
  otp: string = '';
  verificationResult: string = '';
  errorMessage: string = '';

  constructor(private readonly otpService:OtpService) {}

  onVerify() {
    if (this.email && this.otp) {
      this.otpService.verifyOtp({email:this.email, otp:this.otp}).subscribe({
        next: (response) => {
          console.log(response);
          this.verificationResult = 'OTP is valid!';
          this.errorMessage = '';
        },
        error: (error) => {
          console.error(error);
          this.verificationResult = '';
          this.errorMessage = error;
        }
      });
    }
  }

}
