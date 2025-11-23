import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task/task';

import { dummyTasks } from '../dummy-tasks';
import { AddTask } from './add-task/add-task';

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  listOfTasks = dummyTasks;
  showAddTaskDialog = false;

  get selectedUserTasks() {
    return this.listOfTasks.filter((task) => task.userId === this.id);
  }

  onCompleteTask(taskId: string) {
    this.listOfTasks = this.listOfTasks.filter((task) => task.id !== taskId);
  }

  onAddNewTask() {
    this.showAddTaskDialog = true;
  }
}
