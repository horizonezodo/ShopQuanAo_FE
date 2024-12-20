import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8081/auth';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/login`, data);
  }

  register(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/register`, data);
  }

  logout(): Observable<any>{
    return this.http.post(`${baseUrl}/logout`, {});
  }

  refreshToken(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/refresh-token`, data);
  }

  sendVerifyEmail(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/send-verify-email`, data);
  }

  checkVerifyEmail(data:any): Observable<any>{
    return this.http.post(`${baseUrl}/heck-verify-email`, data);
  }

  changePass(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/change-pass`, data);
  }

}
