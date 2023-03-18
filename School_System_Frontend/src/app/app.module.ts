import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AddCourseToStudentComponent } from './add-course-to-student/add-course-to-student.component';
import { StudentCourseListComponent } from './student-course-list/student-course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StudentListComponent,
    CourseListComponent,
    LoginComponent,
    SignupComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    UpdateStudentComponent,
    AddCourseToStudentComponent,
    StudentCourseListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
