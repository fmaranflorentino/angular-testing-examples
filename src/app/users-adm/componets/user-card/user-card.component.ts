import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input()
  userData: Partial<User>;

  @Output()
  editedUser: EventEmitter<Partial<User>> = new EventEmitter();
  @Output()
  deleteUser: EventEmitter<User> = new EventEmitter();

  @ViewChild('userNameInput', { static: true })
  userNameInput: ElementRef;

  isEditionMode = false;

  constructor() { }

  ngOnInit() {
  }

  enterEdtionMode(): void {
    this.isEditionMode = !this.isEditionMode;

    if (this.isEditionMode) {
      setTimeout(() => {
        this.userNameInput.nativeElement.focus();
      }, 10);
    }
  }

  handleDelete(user: User) {
    this.deleteUser.emit(user);
  }

  handleEdition(user: User) {
    this.editedUser.emit(user);
  }

}
