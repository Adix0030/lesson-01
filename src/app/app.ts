import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBar } from "./navigation-bar/navigation-bar";
import { CourseList } from "./course-list/course-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBar, CourseList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lesson-01');
}
