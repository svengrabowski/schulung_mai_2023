import { TodoItem } from '../shared/todo-item';
import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  let searchPipe: SearchPipe;

  const todos: TodoItem[] = [
    new TodoItem('Test'),
    new TodoItem('Hello'),
    new TodoItem('World'),
    new TodoItem('Second Test')
  ];

  beforeEach(() => {
    searchPipe = new SearchPipe();
  });

  it('create an instance', () => {
    expect(searchPipe).toBeTruthy();
  });

  it('should return all todos containing "Te"', () => {
    const transforms: TodoItem[] = searchPipe.transform(todos, 'Te');
    expect(transforms.length).toBe(2);
  });

  it('should return todos if filter is empty', () => {
    const transforms: TodoItem[] = searchPipe.transform(todos, '');
    expect(transforms).toEqual(todos);
  });
});





