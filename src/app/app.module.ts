import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { Task } from './tasks/task/task';
import { AddTask } from './tasks/add-task/add-task';
import { SharedModule } from './shared/card/shared.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, User, Tasks, Task, AddTask],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule],
})
export class AppModule {}
