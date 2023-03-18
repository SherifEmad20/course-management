import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Course';
import { CourseService } from '../Course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent {

  id = this.route.snapshot.params['id'];
  course: Course = new Course();

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.courseService.updateCourse(this.id, this.course).subscribe( data => {
      this.goToCourseList();
    })
  }

  goToCourseList(){
    this.router.navigate(['/course-list']);
  }



}
