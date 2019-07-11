import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';
import { AppModule } from '../app.module';

import { USERS } from './../../../backend/mocks/db-mock';

describe('UsersService', () => {

  let service: UsersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
      providers: [
        UsersService
      ]
    });

    service = TestBed.get(UsersService);
    httpTestingController = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all users', () => {

    service.getAllUsers()
      .subscribe(users => {
        expect(users).toBeTruthy('No user returned');
        expect(users.length).toBe(4, 'Incorrect number of users');
      });

    const req = httpTestingController.expectOne('http://localhost:3000/api/users');

    expect(req.request.method).toEqual('GET');

    req.flush({ payload: Object.values(USERS) });

  });
});
