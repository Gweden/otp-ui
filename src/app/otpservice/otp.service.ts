import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  baseUrl = environment.apiUrl;
  constructor(private readonly http:HttpClient) { }

  sendOtp(email:string):Observable<object>{
    return this.http.post(`${this.baseUrl}/otp/send`,{email});
  }

  verifyOtp(otp:object):Observable<object>{
    return this.http.post(`${this.baseUrl}/otp/verify`,otp);
  }

  resendOtp(email:string):Observable<object>{
    return this.http.post(`${this.baseUrl}/otp/resend`,{email});
  }
}
