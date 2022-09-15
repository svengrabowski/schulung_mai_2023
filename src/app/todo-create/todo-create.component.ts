import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { GroupService } from '../group/services/group.service';
import { TodoService } from '../services/todo.service';
import { GroupItem } from '../shared/group-item';

@Component({
  selector: 'todo-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  public groups: GroupItem[] = [];
  public todoForm: UntypedFormGroup;

  constructor(
    private todoService: TodoService,
    private groupService: GroupService,
    private fb: UntypedFormBuilder,
  ) {
    this.todoForm = this.fb.nonNullable.group({
      title: ['', [Validators.required]],
      email: ['', [Validators.minLength(8), Validators.email]],
      description: [''],
      group: ['']
    });
  }

  public ngOnInit() {
    this.groupService.getAll()
      .subscribe(
        (groupItemList: GroupItem[]) => (this.groups = groupItemList)
      );
  }

  public onSubmit(): void {
    if (this.todoForm.valid) {
      this.todoService.create(this.todoForm.value).then(() => this.todoForm.reset());
    }
  }

  public confirmAbort(): boolean {
    return window.confirm('Nicht gespeicherte Daten gehen verloren!');
  }
}
