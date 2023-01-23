import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord.component';

const routes: Routes = [
  {
    path: '',
    component: DashbordComponent,
    children: [
      {
        path: 'personajes',
        loadChildren: () => import('./Personajes/module-personajes.module').then((module) => module.ModulePersonajesModule)
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleMainRoutingModule { }
