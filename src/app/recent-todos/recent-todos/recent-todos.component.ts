import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoItem } from '../../shared/todo-item';
import { RootState } from '../../state-store/root.state';
import { getLastFiveFromTodoState } from '../../state-store/todos/todo.selector';

@Component({
  selector: 'todo-todo-list-history',
  templateUrl: './recent-todos.component.html'
})
export class RecentTodosComponent implements OnInit {

  public lastFiveTodo$: Observable<TodoItem[]>;

  constructor(private store: Store<RootState>) {
    this.lastFiveTodo$ = this.store.select(getLastFiveFromTodoState);
  }

  public ngOnInit(): void {

  }
}
