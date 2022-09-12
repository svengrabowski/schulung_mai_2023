import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoControlPanelComponent } from './todo-control-panel.component';

describe('TodoControlPanelComponent', () => {
  let component: TodoControlPanelComponent;
  let fixture: ComponentFixture<TodoControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoControlPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
