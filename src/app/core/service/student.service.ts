import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Object> {
      return this.httpClient.get('/api/students');
    }

  create(student: Student): Observable<Object> {
      return this.httpClient.post('/api/students', student);
    }  

  delete(id: number): Observable<Object> {
      return this.httpClient.delete(`/api/students/${id}`);
    }

  getById(id: number): Observable<Object> {
      return this.httpClient.get(`/api/students/${id}`);
    }

  update(id: number, student: Student): Observable<Object> {
      return this.httpClient.put(`/api/students/${id}`, student);
    }
}