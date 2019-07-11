import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http
      .get<any>('http://localhost:3000/api/users')
      .pipe(
        map((res: any) => res.payload)
      );
  }

  getUserById(userId: number): Observable<User> {
    return this.http
      .get(`http://localhost:3000/api/users/${userId}`)
      .pipe(
        map((res: any) => res.payload)
      );
  }

  editUser(user: User): Observable<User> {
    return this.http
      .put(`http://localhost:3000/api/users`, user)
      .pipe(
        map((res: any) => res.payload)
      );
  }

  deleterUser(userId: number): Observable<any> {
    return this.http
      .delete(`http://localhost:3000/api/users/delete/${userId}`);
  }
}
