import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectRoutingModule } from './list-project-routing.module';
import { ListProjectComponent } from './list-project.component';



@NgModule({
  declarations: [
    ListProjectComponent
  ],
  imports: [
    CommonModule,
    ListProjectRoutingModule
  ]
})
export class ListProjectModule { }
