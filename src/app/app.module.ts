import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputLimitDirective } from './directives/input-limit.directive';
import { SearchPipe } from './pipes/search.pipe';
import { RecentTodosComponent } from './recent-todos/recent-todos/recent-todos.component';
import { todoReducer } from './state-store/todos/todo.reducer';
import { TodoControlPanelComponent } from './todo-control-panel/todo-control-panel.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoControlPanelComponent,
    TodoDetailComponent,
    TodoCreateComponent,
    SearchPipe,
    InputLimitDirective,
    RecentTodosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({todo: todoReducer}),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
