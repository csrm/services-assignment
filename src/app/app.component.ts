import { Component } from '@angular/core';
import { UsersService } from './common/users.service';
import { CounterService } from './common/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(public counterService: CounterService){
   }

//   activeUsers = [];
//   inactiveUsers = [];
//
//   constructor(private usersService: UsersService) {
//     this.activeUsers = usersService.activeUsers;
//     this.inactiveUsers = usersService.inactiveUsers;
//   }
//
//   onSetToInactive(id: number) {
//     this.usersService.setToInactive(id);
//   }
//
//   onSetToActive(id: number) {
//     this.usersService.setToActive(id);
//   }
}
