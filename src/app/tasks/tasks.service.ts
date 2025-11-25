import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { ITask, NewTaskDto } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: ITask[] = [];

  constructor() {
    this.tasks = dummyTasks;
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskDto, userId: string) {
    const newTask: ITask = {
      id: new Date().getTime().toString(),
      userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    };
    this.tasks.unshift(newTask);
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
