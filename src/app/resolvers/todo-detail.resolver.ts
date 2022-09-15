import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { TodoItem } from '../shared/todo-item';
import { TodoService } from '../services/todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoDetailResolver implements Resolve<TodoItem> {
  constructor(private todoService: TodoService) {}

  public resolve(route: ActivatedRouteSnapshot): Promise<TodoItem> {
    const id = Number(route.paramMap.get('id'));
    return this.todoService.getById(id);
  }
}
