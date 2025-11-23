import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserName!: string;

  onSelectUser(userId: string) {
    this.selectedUserName = this.users.find(user => user.id === userId)?.name!;
  }
}
