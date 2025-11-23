import { Component, Input } from '@angular/core';
import { Task } from './task/task';

import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  listOfTasks = dummyTasks;

  get selectedUserTasks() {
    return this.listOfTasks.filter((task) => task.userId === this.id);
  }

  onCompleteTask(taskId: string) {
    this.listOfTasks = this.listOfTasks.filter((task) => task.id !== taskId);
  }
}
