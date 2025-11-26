import { Component, Input } from '@angular/core';

import { dummyTasks } from '../dummy-tasks';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  listOfTasks = dummyTasks;
  showAddTaskDialog = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id);
  }

  onOpenDialog() {
    this.showAddTaskDialog = true;
  }

  onCloseDialog() {
    this.showAddTaskDialog = false;
  }
}
