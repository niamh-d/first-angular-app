import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Tasks } from './tasks';
import { Task } from './task/task';
import { AddTask } from './add-task/add-task';
import { SharedModule } from '../shared/card/shared.module';

@NgModule({
  declarations: [Tasks, Task, AddTask],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [Tasks],
})
export class TasksModule {}
