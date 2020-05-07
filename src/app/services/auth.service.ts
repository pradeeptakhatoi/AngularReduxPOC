import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  login(email: string, password: string) {
    console.log(email, password);
    return this.http.post(this.baseUrl + 'login', { email, password });
  }
}
