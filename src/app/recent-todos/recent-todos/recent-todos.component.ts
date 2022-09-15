import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TodoItem } from '../../shared/todo-item';

@Component({
  selector: 'todo-todo-list-history',
  templateUrl: './recent-todos.component.html'
})
export class RecentTodosComponent implements OnInit, OnDestroy {

  public todoList: TodoItem[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private store: Store<{todoList: []}>) {
  }

  public ngOnInit(): void {
    this.subscription = this.store
      .subscribe((x) => {
        this.todoList = x.todoList;
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
