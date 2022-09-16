import { createSelector } from '@ngrx/store';
import { TodoItem } from '../../shared/todo-item';
import { RootState } from '../root.state';
import { TodoState } from './todo.state';

const retrieveTodoState = (state: RootState) => state.todo;

export const getLastFiveFromTodoState = createSelector(
  retrieveTodoState,
  (todoState: TodoState): TodoItem[] => todoState.lastFiveViewed
);
