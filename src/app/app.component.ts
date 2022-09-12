import { Component } from "@angular/core";
import { TodoItem } from "./shared/todo-item";

@Component({
  selector: "todo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public title = "Todos";

  public todo = new TodoItem(
    "Test",
    "Das ist ein Test",
    "max@mustermann.de",
    false,
    0
  );
}
