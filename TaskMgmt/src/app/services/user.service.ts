import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSignIn } from '../models/user-sign-in';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = 'https://localhost:7197/api/';
  constructor(private http: HttpClient) {}

  Post<T>(endpoint: string, data: T) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.baseUrl + endpoint, data, {
      headers: headers,
      responseType: 'text',
    });
  }
}
