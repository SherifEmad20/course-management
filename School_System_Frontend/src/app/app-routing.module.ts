import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseToStudentComponent } from './add-course-to-student/add-course-to-student.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentCourseListComponent } from './student-course-list/student-course-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'add-course', component:AddCourseComponent},
  {path:'course-list', component:CourseListComponent},
  {path:'home', component:HomePageComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'student-course-list', component:StudentCourseListComponent},
  {path:'student-list', component:StudentListComponent},
  {path:'update-course/:id', component:UpdateCourseComponent},
  {path:'update-student/:id', component:UpdateStudentComponent},
  {path:'addCourse/:id', component:AddCourseToStudentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
