import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project.component';
import { CreateProjectRoutingModule } from './create-project-routing.module';



@NgModule({
  declarations: [
      CreateProjectComponent
  ],
  imports: [
    CommonModule,
    CreateProjectRoutingModule
  ]
})
export class CreateProjectModule { }
