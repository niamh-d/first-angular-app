import { Component, inject, Input } from '@angular/core';
import { ITask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: ITask;
  private tasksService = inject(TasksService);

  onComplete() {
    this.tasksService.completeTask(this.task.id);
  }
}
