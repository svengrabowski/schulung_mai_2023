import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';
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
    private todoService: TodoService,
  ) {
  }

  public ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const todoId = Number(paramMap.get('id'));
      this.todoService.getById(todoId).then((loadedTodo: TodoItem) => this.todo = loadedTodo);
    });
  }
}
