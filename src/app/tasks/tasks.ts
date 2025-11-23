import { Component, Input } from '@angular/core';
import { Task } from "./task/task";

import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
@Input({required: true}) id!: string;
@Input({required: true}) name!: string;

get selectedUserTasks() {
  return dummyTasks.filter(task => task.userId === this.id);
}
}
