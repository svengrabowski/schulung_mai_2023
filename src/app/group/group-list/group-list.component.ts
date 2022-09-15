import { Component, OnInit } from '@angular/core';
import { GroupItem } from '../../shared/group-item';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'todo-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  public groups: GroupItem[] = [];

  constructor(private groupService: GroupService) {
  }

  public ngOnInit(): void {
    this.groupService.getAll()
      .subscribe((groups: GroupItem[]) => (this.groups = groups));
  }
}
