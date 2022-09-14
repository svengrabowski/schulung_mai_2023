import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../shared/todo-item';

@Component({
  selector: 'todo-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent {
  public todo = new TodoItem('', '', '', false);

  constructor(private todoService: TodoService) {
  }

  public onSubmit(form: NgForm): void {
    if (form.valid) {
      this.todoService.create(this.todo).then(() => form.reset());
    }
  }
}
