import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router, RouterEvent } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { catchError, filter, map, switchMap } from "rxjs/operators";
import {
  AnalyticsService,
  PageNavigationInfo,
} from "./services/analytics.service";

@Component({
  selector: "todo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public title: string = "Todos";

  private routingSubscription: Subscription = new Subscription();
  private navEventObservable: Observable<PageNavigationInfo | RouterEvent> =
    new Observable();

  constructor(private router: Router, private analytics: AnalyticsService) {}

  public ngOnInit() {
    this.navEventObservable = this.router.events.pipe(
      filter(this.isNavigationEndEvent),

      map((event) => ({ url: event.url, date: new Date() })),
      switchMap((loggableData) => this.analytics.log(loggableData)),
      catchError((err) => this.navEventObservable)
    );
    console.log(this.navEventObservable);
    this.routingSubscription = this.navEventObservable.subscribe({
      next: (e) => {},
      error: (err) => console.error(err),
    });
  }

  public isNavigationEndEvent(event: any): boolean {
    return event instanceof NavigationEnd;
  }

  public navigate(url: string): void {
    this.router.navigateByUrl(url);
  }
}
