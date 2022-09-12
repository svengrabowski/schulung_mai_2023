import { TodoItem } from './todo-item';

declare function require(filename: string): any;

const db = require('../../../db.json');
export const todos = db.todos as TodoItem[];
