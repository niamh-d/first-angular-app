import { Component, computed, EventEmitter, Input, Output} from '@angular/core';

interface IUser {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input() user!: IUser;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  get altDescription() {
    return this.user.name + "'s avatar";
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
