import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupCreateComponent } from './group-create/group-create.component';
import { GroupListComponent } from './group-list/group-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
  {
    path: 'todos',
    children: [
      {path: '', component: TodoListComponent},
      {path: 'new', component: TodoCreateComponent},
      {path: ':id', component: TodoDetailComponent},
    ],
  },
  {
    path: 'groups',
    children: [
      {path: '', component: GroupListComponent},
      {path: 'new', component: GroupCreateComponent},
    ],

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
