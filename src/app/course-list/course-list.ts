import { Component } from '@angular/core';
import { CourseListItem } from "../course-list-item/course-list-item";

@Component({
  selector: 'app-course-list',
  imports: [CourseListItem],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

}
