import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { TodoItem } from '../shared/todo-item';
import { AddTodo } from '../state-store/todos/todo.actions';


@Component({
  selector: 'todo-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  public todo: TodoItem = new TodoItem();

  constructor(
    private route: ActivatedRoute,
    private store: Store<TodoItem>
  ) {
  }

  public ngOnInit(): void {
    this.todo = this.route.snapshot.data.todo;
    this.store.dispatch(new AddTodo(this.todo));
  }
}
