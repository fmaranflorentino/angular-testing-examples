import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-users-adm',
  templateUrl: './users-adm.component.html',
  styleUrls: ['./users-adm.component.scss']
})
export class UsersAdmComponent implements OnInit {
  usersList$: Observable<User[]>;

  constructor(private usersService: UsersService) { }

   ngOnInit() {

    this.getAllUsers();

  }

  getAllUsers() {
    this.usersList$ = this.usersService.getAllUsers();
  }

  trackByUsers(index, item) {
    return item.id;
  }

  handleDeleterUser(user: User) {
    console.log('delete user', user);
  }

  handleEditUser(user: User) {
    console.log('edit user', user);
  }

}
