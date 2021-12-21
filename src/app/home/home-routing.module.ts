import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListProjectComponent } from './list-project/list-project.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./create-project/create-project.module').then( m => m.CreateProjectModule)
      },
      {
        path: 'create-project',
        loadChildren: () => import('./create-project/create-project.module').then( m => m.CreateProjectModule)
      },
      {
        path: 'list-project',
        loadChildren: () => import('./list-project/list-project.module').then( m => m.ListProjectModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
