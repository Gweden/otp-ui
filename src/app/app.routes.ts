import { Routes } from '@angular/router';
import { OtprequestComponent } from './otprequest/otprequest.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';

export const routes: Routes = [
    { path: '', redirectTo: '/otp-request', pathMatch: 'full' },
    { path: 'otp-request', component: OtprequestComponent },
    { path: 'otp-verify', component: OtpverifyComponent },
];
