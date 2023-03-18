import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../Course';
import { CourseService } from '../Course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

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

  updateCourse(id: number){
    this.router.navigate(['update-course', id]);
  }

  deleteCourse(id: number){
    this.courseService.deleteCourse(id).subscribe( data => {
      console.log(data);
      this.getCourses();
    })
  }



}
