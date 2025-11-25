import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../task/task.model';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: ITask;
  @Output() complete = new EventEmitter<string>();

  onComplete() {
    this.complete.emit(this.task.id);
  }
}
