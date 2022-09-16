import { Action } from '@ngrx/store';
import { TodoItem } from '../../shared/todo-item';

export enum ActionTypes {
  AddTodo = '[TodoList Component] Add Todo'
}

export class AddTodo implements Action {
  readonly type = ActionTypes.AddTodo;

  constructor(public readonly todoContent: TodoItem) {
  }
}
