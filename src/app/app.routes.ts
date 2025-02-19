import { Routes } from '@angular/router';
import { OtpRequestComponent } from './otprequest/otprequest.component';
import { OtpVerifyComponent } from './otpverify/otpverify.component';

export const routes: Routes = [
    { path: 'otp-request', component: OtpRequestComponent },
    { path: 'otp-verify', component: OtpVerifyComponent },
    { path: '', redirectTo: '/otp-request', pathMatch: 'full' },
];
