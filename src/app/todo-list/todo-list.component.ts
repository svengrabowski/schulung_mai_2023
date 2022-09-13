import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../shared/todo-item';

@Component({
  selector: 'todo-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService) {
  }

  public todoList: TodoItem[] = [];
  public showEmail: boolean = true;

  public ngOnInit() {
    this.fetchTodos();
  }

  public fetchTodos(): Promise<TodoItem[]> {
    return this.todoService.getAll().then(todos => (this.todoList = todos));
  }

  public onCompleteClick(todo: TodoItem): void {
    todo.completed = !todo.completed;
    this.todoService.update(todo);
  }

  public getCompletedText(todo: TodoItem): string {
    return todo.completed ? 'Zurücknehmen' : 'Erledigen';
  }

  public onDeleteClick(todo: TodoItem): void {
    this.todoService.delete(todo)
      .then(() => this.fetchTodos());
  }
}


