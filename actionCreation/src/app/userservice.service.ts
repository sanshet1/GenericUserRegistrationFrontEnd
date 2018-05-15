import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserDTO } from './userDTO.interface';
import { UserResponse } from './UserResponse.interface';

@Injectable()
export class UserService {

  private static readonly POST_CUSTOMER_URL = 'http://localhost:8080/user';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }


  createUser(user: UserDTO): Observable<UserResponse> {

    console.log(JSON.stringify(user));
    return this.http.post<UserResponse>(UserService.POST_CUSTOMER_URL, JSON.stringify(user), { headers: this.headers });
  }
}