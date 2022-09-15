import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoItem } from '../shared/todo-item';

@Component({
  selector: 'todo-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  public todo: TodoItem | undefined;

  constructor(
    private route: ActivatedRoute,
  ) {
  }
  public ngOnInit(): void {
    this.todo = this.route.snapshot.data.todo;
  }
}
