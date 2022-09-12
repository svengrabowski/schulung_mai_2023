import { Component } from "@angular/core";
import { todos as mockTodos } from "./shared/mock-todos";
import { TodoItem } from "./shared/todo-item";

@Component({
  selector: "todo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public title: string = "Todos";

  public todoList: TodoItem[] = mockTodos;

  public showEmail: boolean = true;

  public getCompletedText(todo: TodoItem): string {
    return todo.completed ? "Zurücknehmen" : "Erledigen";
  }

  public onCompleteClick(todo: TodoItem): void {
    todo.completed = !todo.completed;
  }

  public onDeleteClick(todo: TodoItem): void {
    console.log("Todo gelöscht");
  }
}
