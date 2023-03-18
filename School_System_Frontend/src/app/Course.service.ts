import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  private baseURL = 'http://host.docker.internal:8080/api/course';
  //private baseURL = 'http://localhost:8080/api/course';

  addCourse(course: Course): Observable<Object>{
    return this.http.post<Course>(`${this.baseURL}/addCourse`, course);
  }

  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseURL}/getCourses`);
  }

  updateCourse(id:number, course: Course): Observable<Object>{
    return this.http.put(`${this.baseURL}/updateCourse/${id}`, course);
  }

  deleteCourse(id:number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/deleteCourse/${id}`);
  }

}
