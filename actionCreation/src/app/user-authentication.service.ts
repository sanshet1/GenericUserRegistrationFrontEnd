import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserAuthenticationService {

  private static readonly CUSTOMER_LOGIN_URL = 'http://localhost:8080/login';
  constructor(private http: HttpClient) { }

  login(userId: string, password: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('userId', userId);
    params = params.append('password', password);
    return this.http.get(UserAuthenticationService.CUSTOMER_LOGIN_URL, { params: params });
  }
}