import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'todo-todo-control-panel',
  templateUrl: './todo-control-panel.component.html',
  styleUrls: ['./todo-control-panel.component.css']
})
export class TodoControlPanelComponent implements DoCheck, OnInit, OnChanges, OnDestroy {

  @Input() public todoCount: number | undefined;
  @Input() public displayAllEmails: boolean = false;
  @Output() public displayAllEmailsChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public ngOnInit(): void {
    // console.log('Panel initialisiert');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    for (const propertyName in changes) {
      if (changes.hasOwnProperty(propertyName)) {
        const change = changes[propertyName];
        // console.log(
        //   `${ propertyName } hat sich von ${ change.previousValue } zu ${
        //     change.currentValue
        //   } geändert`
        // );
      }
    }
  }

  public ngDoCheck(): void {
    // console.log('Panel wird auf Änderungen geprüft');
  }

  public ngOnDestroy(): void {
    // console.log('Panel zerstört');
  }

  public toggleShowEmail(): void {
    this.displayAllEmails = !this.displayAllEmails;
    this.displayAllEmailsChange.emit(this.displayAllEmails);
  }
}

