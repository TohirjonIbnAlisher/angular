import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from "./student-list-component/student-list-component";

@Component({
  selector: 'app-root',
  imports: [StudentListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('3.1-task');
}
