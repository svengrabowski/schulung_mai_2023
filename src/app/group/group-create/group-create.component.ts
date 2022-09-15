import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GroupItem } from '../../shared/group-item';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'todo-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.css']
})
export class GroupCreateComponent {
  public group = new GroupItem('');

  constructor(private groupService: GroupService) {
  }

  public onSubmit(form: NgForm): void {
    this.groupService.create(this.group)
      .subscribe(() => form.reset());
  }
}
