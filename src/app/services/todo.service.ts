import { Injectable } from '@angular/core';
import { todos } from '../shared/mock-todos';
import { TodoItem } from '../shared/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public getAll(): TodoItem[] {
    return todos;
  }

  public update(todo: TodoItem): void {
    console.log('Todo aktualisiert');
  }

  public delete(todo: TodoItem): void {
    console.log('Todo gelöscht');
  }
}
