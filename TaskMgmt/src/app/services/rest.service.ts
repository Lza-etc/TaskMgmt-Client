import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private baseUrl: string = 'https://localhost:7197/api/';
  constructor(private http: HttpClient) {}

  GetAll(endpoint: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.baseUrl + endpoint, {
      headers: headers,
    });
  }

  Post<T>(endpoint: string, data: T) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.baseUrl + endpoint, data, {
      headers: headers,
    });
  }
  Get() {}
}
