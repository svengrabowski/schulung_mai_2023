import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { TodoCreateComponent } from '../todo-create/todo-create.component';

@Injectable({
  providedIn: 'root'
})
export class TodoCreateSavedGuard implements CanDeactivate<TodoCreateComponent> {

  public canDeactivate(component: TodoCreateComponent): boolean {
    return component.confirmAbort();
  }
}
