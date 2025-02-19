import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { OtpService } from '../otpservice/otp.service';

@Component({
  selector: 'app-otp-request',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './otp-request.component.html',
  styleUrl: './otp-request.component.scss'
})
export class OtpRequestComponent {
  email: string = '';
  otpSent: boolean = false;
  otpError: boolean = false;
  errorMessage: string = '';

  constructor(
    private readonly otpService:OtpService,
    private readonly router:Router
  ) {}

  onSubmit() {
    if (this.email) {
      this.otpService.sendOtp(this.email).subscribe({
        next: (response) => {
          console.log(response);
          this.otpSent = true;
          this.errorMessage = '';
        },
        error: (error) => {
          this.otpError = true;
          console.error(error);
          this.errorMessage = error;
        }
      });
    }
  }

  redirectToVerify() {
    this.router.navigate(['/otp-verify'], { queryParams: { email: this.email } });
  }

  resendOtp() {
    if (this.email) {
      this.otpService.resendOtp(this.email).subscribe({
        next: (response) => {
          console.log(response);
          this.otpSent = true;
          this.errorMessage = '';
        },
        error: (error) => {
          this.otpError = true;
          console.error(error);
          this.errorMessage = error;
        }
      });
    }
  }
}
