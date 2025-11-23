import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) selected!: boolean;
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
