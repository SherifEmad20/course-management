import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  private baseURL = 'http://host.docker.internal:8080/api/student';
  //private baseURL = 'http://localhost:8080/api/student';

  loginStudent(student: Student): Observable<Object>{
    return this.http.post<Student>(`${this.baseURL}/login`, student);
  }

  signUpStudent(student: Student): Observable<Object>{
    return this.http.post<Student>(`${this.baseURL}/signup`, student);
  }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseURL}/getStudents`);
  }

  updateStudent(id:number, student: Student): Observable<Object>{
    return this.http.put(`${this.baseURL}/update/${id}`, student);
  }

  deleteStudent(id:number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/delete/${id}`);
  }

  addCourseToStudent(studentId:number, courseId:number): Observable<Object>{
    return this.http.put(`${this.baseURL}/${studentId}/addCourse/${courseId}`, null);
  }
}
