import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, User],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
