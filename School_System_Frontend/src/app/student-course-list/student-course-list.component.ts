import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../Course';
import { CourseService } from '../Course.service';

@Component({
  selector: 'app-student-course-list',
  templateUrl: './student-course-list.component.html',
  styleUrls: ['./student-course-list.component.css']
})
export class StudentCourseListComponent {

  courses!: Course[]
  constructor(private courseService: CourseService, private router:Router) { }

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(){
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  joinCourse(id: number){
    this.router.navigate(['addCourse', id]);
  }



}
