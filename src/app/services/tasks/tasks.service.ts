import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyhttpService } from '../http/myhttp.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private apiUrl = 'http://localhost:8080/api-find/';

  constructor(private http: MyhttpService) { }

  createTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl + 'task/tasks', task);
  }

  getAllTasks(): Observable<any> {
    return this.http.get(`${this.apiUrl}task/tasks`);
  }

  getTaskById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}task/tasks/${id}`);
  }

  updateTask(task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}task/tasks/${task.id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}task/tasks/${id}`);
  }
}
