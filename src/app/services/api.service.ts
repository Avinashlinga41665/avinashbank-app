import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://avinash-bank-api.onrender.com/api'; // your deployed API base URL

  constructor(private http: HttpClient) {}

  login(userloginname: string, userloginpwd: string): Observable<any> {
    const body = {
      userloginname,  // must match the property names in your C# model
      userloginpwd
    };
    return this.http.post(`${this.baseUrl}/Login`, body);
  }
}
