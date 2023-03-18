import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../Student';
import { StudentService } from '../Student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {

  id = this.route.snapshot.params['id'];
  student: Student = new Student();

  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.studentService.updateStudent(this.id, this.student).subscribe( data => {
      this.goToStudentList();
    })
  }
  
  goToStudentList(){
    this.router.navigate(['/student-list']);
  }

}
