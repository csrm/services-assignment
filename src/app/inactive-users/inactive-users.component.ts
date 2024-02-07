import { Component } from '@angular/core';
import { UsersService } from '../common/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];
//   @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
   this.usersService.setToActive(id);
//     this.userSetToActive.emit(id);
  }
}
