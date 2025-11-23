import { Component, computed, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  get altDescription() {
    return this.name + "'s avatar";
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
