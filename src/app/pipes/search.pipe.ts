import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../shared/todo-item';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(todos: TodoItem[], query: string): TodoItem[] {
    return todos.filter(todo => todo.title.includes(query));
  }
}
