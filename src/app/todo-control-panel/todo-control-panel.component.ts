import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todo-todo-control-panel',
  templateUrl: './todo-control-panel.component.html',
  styleUrls: ['./todo-control-panel.component.css']
})
export class TodoControlPanelComponent {

  @Input() public todoCount: number | undefined;
  @Input() public displayAllEmails: boolean = false;
  @Output() public displayAllEmailsChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public toggleShowEmail(): void {
    this.displayAllEmails = !this.displayAllEmails;
    this.displayAllEmailsChange.emit(this.displayAllEmails);
  }
}

