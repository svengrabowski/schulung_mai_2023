import { Action } from '@ngrx/store';
import { ActionTypes, AddTodo } from './todo.actions';
import { initialTodoState, TodoState } from './todo.state';


export function todoReducer(state: TodoState = initialTodoState, action: Action): TodoState {

  switch (action.type) {
    case ActionTypes.AddTodo:
      return ReducerMappings.addATodo(state, action as AddTodo);

    default:
      return state;
  }
}

class ReducerMappings {

  public static addATodo(state: TodoState, action: AddTodo): TodoState {

    const addTodoAction = action as AddTodo;
    const lastFiveTodos = [...state.lastFiveViewed];

    if (lastFiveTodos.length > 4) {
      lastFiveTodos.pop();
    }
    lastFiveTodos.unshift(addTodoAction.todoContent);
    return {
      ...state,
      lastFiveViewed: lastFiveTodos
    };

  }
}

