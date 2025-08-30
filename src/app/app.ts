import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBar } from "./navigation-bar/navigation-bar";
import { CourseList } from "./course-list/course-list";
import { Course } from './course';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBar, CourseList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('List of courses');

  courses: Course[] = [
    { name: 'Advanced Frontend', code: 'AF', ects: 5 },
    { name: 'Internet of Things', code: 'IoT', ects: 5 },
    { name: 'Bachelorprojekt', code: 'BP', ects: 20 },
  ];
}
