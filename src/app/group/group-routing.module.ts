import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupCreateComponent } from './group-create/group-create.component';
import { GroupListComponent } from './group-list/group-list.component';

const groupRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: GroupListComponent},
      {path: 'new', component: GroupCreateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(groupRoutes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {
}
