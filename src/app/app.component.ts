import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "todo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public title: string = "Todos";

  constructor(private router: Router) {}

  public navigate(url: string): void {
    this.router.navigateByUrl(url);
  }
}
