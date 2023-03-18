import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Course';
import { CourseService } from '../Course.service';
import { Student } from '../Student';
import { StudentService } from '../Student.service';

@Component({
  selector: 'app-add-course-to-student',
  templateUrl: './add-course-to-student.component.html',
  styleUrls: ['./add-course-to-student.component.css']
})
export class AddCourseToStudentComponent {

  id = this.route.snapshot.params['id'];

  student: Student = new Student();
  course: Course = new Course();

  constructor(private studentService:StudentService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  private addCourse():void{
    this.studentService.addCourseToStudent(this.student.id, this.id).subscribe(data => {
      console.log(data)
    })
    this.goToStudentList();
  }

  goToStudentList(){
    this.router.navigate(['/student-list'])
  }

  onSubmit(){
    this.addCourse();
  }



}
