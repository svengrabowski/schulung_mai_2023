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

  public ngOnInit() {
    this.todoList = this.todoService.getAll();
  }

  public todoList: TodoItem[] = [];

  public showEmail: boolean = true;

  public getCompletedText(todo: TodoItem): string {
    return todo.completed ? 'Zurücknehmen' : 'Erledigen';
  }

  public onCompleteClick(todo: TodoItem): void {
    todo.completed = !todo.completed;
    this.todoService.update(todo);
  }

  public onDeleteClick(todo: TodoItem): void {
    this.todoService.delete(todo);
  }
}


