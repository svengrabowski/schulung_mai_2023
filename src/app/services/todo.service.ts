import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TodoItem } from '../shared/todo-item';

const BASE_URL = 'http://localhost:3000/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private readonly http: HttpClient) {
  }

  public getAll(): Promise<TodoItem[]> {
    return firstValueFrom(this.http.get<TodoItem[]>(BASE_URL));
  }

  public update(todo: TodoItem): Promise<{}> {
    return firstValueFrom(this.http.put<TodoItem[]>(`${ BASE_URL }/${ todo.id }`, todo));
  }

  public delete(todo: TodoItem): Promise<{}> {
    return firstValueFrom(this.http.delete<TodoItem[]>(`${ BASE_URL }/${ todo.id }`));
  }
}
