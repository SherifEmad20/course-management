import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { async } from 'rxjs';
import { Student } from '../Student';
import { StudentService } from '../Student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message!:string;
  student:Student = new Student();

  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit(): void {
  }
  
  private login(): void{
    this.studentService.loginStudent(this.student).subscribe( data => {
      alert("login successful");
      this.goToHomePage()
    }, error => {
      alert("login failed")
      this.message = "bad credintials";
    })
  }

  goToHomePage(){
    this.router.navigate(['/home'])
  }

  goToSignUpPage(){
    this.router.navigate(['/signup'])
  }


  onSubmit(){
    this.login();
  }



}
