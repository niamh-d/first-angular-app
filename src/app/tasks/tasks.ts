import { Component, Input } from '@angular/core';
import { Task } from './task/task';

import { dummyTasks } from '../dummy-tasks';
import { AddTask } from './add-task/add-task';
import { type NewTaskDto } from './task/task.model';

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

  onAddNewTask(taskData: NewTaskDto) {
    this.listOfTasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
      userId: this.id,
    });
    this.showAddTaskDialog = false;
  }

  onOpenDialog() {
    this.showAddTaskDialog = true;
  }

  onCloseDialog() {
    this.showAddTaskDialog = false;
  }
}
