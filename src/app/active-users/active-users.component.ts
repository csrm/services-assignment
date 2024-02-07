import { Component } from '@angular/core';
import { UsersService } from '../common/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];
//   @Output() userSetToInactive = new EventEmitter<number>();
  constructor(private usersService: UsersService) {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
//     this.userSetToInactive.emit(id);
    this.usersService.setToInactive(id);
  }
}
