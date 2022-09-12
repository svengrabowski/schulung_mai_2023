export class TodoItem {
  constructor(
    public title = '',
    public description = '',
    public email = '',
    public completed = false,
    public id?: number
  ) {
  }
}
