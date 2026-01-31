import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TodoModel{
  id: number;
  title: string;
  createdDate: Date;
  operationTime: Date;
  isDone: Boolean
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:5027/Todo';

  constructor(private httpClient: HttpClient){}

  getTodos() : Observable<TodoModel[]>
  {
    return this.httpClient.get<TodoModel[]>(this.apiUrl);
  }

  getTodoById(id: number): Observable<TodoModel>
  {
    return this.httpClient.get<TodoModel>('${this.apiUrl}/${id}');
  }
}
