import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTodosComponent } from './recent-todos.component';

describe('RecentTodosComponent', () => {
  let component: RecentTodosComponent;
  let fixture: ComponentFixture<RecentTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
