import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../Student';
import { StudentService } from '../Student.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  student:Student = new Student();

  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit(): void {
  }

  private signupStudent():void{
    this.studentService.signUpStudent(this.student).subscribe(data => {
      console.log(data)
    })
    this.goToLogin();
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }

  onSubmit(){
    this.signupStudent();
  }



}
