import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http
      .get<any>('http://localhost:3000/api/users')
      .pipe(
        map(res => res['payload'])
      );
  }
}
