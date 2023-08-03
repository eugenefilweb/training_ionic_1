import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpService) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.loginPost('/user/login', credentials);
  }
}
