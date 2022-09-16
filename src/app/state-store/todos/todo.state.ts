import { TodoItem } from '../../shared/todo-item';

export interface TodoState {
  todoList: TodoItem[];
  lastFiveViewed: TodoItem[];
}

export const initialTodoState: TodoState = {
  todoList: [],
  lastFiveViewed: []
};
