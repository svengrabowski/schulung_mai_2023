import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroupCreateComponent } from './group-create/group-create.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupRoutingModule } from './group-routing.module';

@NgModule({
  declarations: [
    GroupListComponent,
    GroupCreateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    GroupRoutingModule
  ]
})
export class GroupModule {
}
