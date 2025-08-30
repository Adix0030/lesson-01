import { Component, Input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-list-item',
  standalone: true,
  imports: [],
  templateUrl: './course-list-item.html',
  styleUrl: './course-list-item.css'
})
export class CourseListItem {
  @Input() course!: Course;
}
