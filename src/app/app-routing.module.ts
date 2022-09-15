import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCreateSavedGuard } from './guards/todo-create-saved.guard';
import { TodoDetailResolver } from './resolvers/todo-detail.resolver';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
  {
    path: 'todos',
    children: [
      {path: '', component: TodoListComponent},
      {
        path: 'new',
        component: TodoCreateComponent,
        canDeactivate: [TodoCreateSavedGuard]
      },
      {
        path: ':id',
        component: TodoDetailComponent,
        resolve: {todo: TodoDetailResolver}
      },

    ],
  },
  {
    path: 'groups',
    loadChildren: () => import('./group/group.module').then(m => m.GroupModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
