import { Component, Input } from '@angular/core';
import { CourseListItem } from "../course-list-item/course-list-item";
import { Course } from '../course';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseListItem, NgFor],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css']
})
export class CourseList {
  @Input() courses: Course[] = [];
}
