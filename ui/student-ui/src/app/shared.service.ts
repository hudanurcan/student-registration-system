import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000"

  constructor(private http:HttpClient) { }

  getStudent(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/student/');
  }

  addStudent(student: any): Observable<any> {
    return this.http.post(this.APIUrl + '/student/', student);
  }

  updateStudent(student: any) {
    return this.http.put(this.APIUrl + '/student/', student);
  }

  deleteStudent(studentId: number) {
   return this.http.delete(`${this.APIUrl}/student/${studentId}`);
  } 






}
