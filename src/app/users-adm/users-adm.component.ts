import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-users-adm',
  templateUrl: './users-adm.component.html',
  styleUrls: ['./users-adm.component.scss']
})
export class UsersAdmComponent implements OnInit {
  usersList: User[];

  constructor(private usersService: UsersService) { }

  async ngOnInit() {

    this.usersList = await this.getAllUsers();

  }

  getAllUsers(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usersService
        .getAllUsers()
        .subscribe(
          res => {
            resolve(res);
          }
        ),
        error => {
          reject(error);
        }
    })
  }

  trackByUsers(index, item) {
    return item.id
  }

  handleDeleterUser(user: User) {
    console.log('delete user', user);
  }

  handleEditUser(user: User) {
    console.log('edit user', user);
  }

}
