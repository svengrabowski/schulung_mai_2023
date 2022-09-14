import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import { GroupItem } from '../shared/group-item';

@Component({
  selector: 'todo-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  public groups: GroupItem[] = [];

  constructor(private groupService: GroupService) {
  }

  public ngOnInit() {
    this.groupService.getAll()
      .subscribe((groups: GroupItem[]) => (this.groups = groups));
  }
}
