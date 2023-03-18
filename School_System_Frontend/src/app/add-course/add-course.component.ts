import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../Course';
import { CourseService } from '../Course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  course: Course = new Course();

  constructor(private courseService: CourseService, private router:Router) { 
  }
  
  ngOnInit(): void {}

  private addCourse(): void{
    this.courseService.addCourse(this.course).subscribe( data => {
      console.log(data)
    }
    )
    this.goToCourseList();
  }

  goToCourseList(){
    this.router.navigate(['/course-list'])
  }

  onSubmit(){
    this.addCourse();
  }
}
