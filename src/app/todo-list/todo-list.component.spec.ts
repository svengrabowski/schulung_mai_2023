import { waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, Spectator, SpyObject } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';
import { SearchPipe } from '../pipes/search.pipe';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../shared/todo-item';
import { TodoControlPanelComponent } from '../todo-control-panel/todo-control-panel.component';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent Spectator Test', () => {
  let spectatorTodoList: Spectator<TodoListComponent>;
  let todoServiceSpy: SpyObject<TodoService>;

  const createTodolist = createComponentFactory({
    component: TodoListComponent,
    declarations: [MockComponent(TodoControlPanelComponent), SearchPipe],
    imports: [FormsModule, RouterTestingModule],
    mocks: [TodoService],
    detectChanges: false
  });
  const mockTodoList: TodoItem[] = [
    {
      title: 'Title 1',
      description: 'description 1',
      email: 'person@domain.com',
      completed: false,
      id: 1,
      group: 'Test Group'
    },
    {
      title: 'Title 2',
      description: 'description 2',
      email: 'otherperson@domain.com',
      completed: true,
      id: 2,
      group: 'Test Group'
    }
  ];

  beforeEach(waitForAsync(() => {
    spectatorTodoList = createTodolist();
    todoServiceSpy = spectatorTodoList.inject(TodoService);
    todoServiceSpy.getAll.andReturn(of(mockTodoList).toPromise());
    spectatorTodoList.detectChanges();
  }));

  it('should be called ', () => {
    expect(todoServiceSpy.getAll).toHaveBeenCalled();
  });

  it('should have an input', () => {
    expect(spectatorTodoList.query('input')).toExist();
  });

  it('should have values in the array', () => {
    expect(spectatorTodoList.component.todoList.length).toBe(2);
    expect(spectatorTodoList.component.todoList[1].completed).toBe(true);
  });

  it('should have two buttons with text "Löschen"', () => {
    spectatorTodoList.detectChanges();

    expect(spectatorTodoList.queryAll('.btn-danger').length).toBe(2);
    expect(spectatorTodoList.queryAll('.btn-danger')[0]).toHaveText('Löschen');
  });
});
