import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../Course';
import { Student } from '../Student';
import { StudentService } from '../Student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  students!: Student[]

  constructor(private studentService: StudentService, private router:Router) { 
  }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  updateStudent(id: number){
    this.router.navigate(['update-student', id]);
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe( data => {
      console.log(data);
      this.getStudents();
    })
  }
}
