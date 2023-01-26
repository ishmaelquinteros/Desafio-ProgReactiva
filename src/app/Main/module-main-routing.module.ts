import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord.component';
import { ControlAccesoGuard } from '../Auth/Guard/control-acceso.guard';

const routes: Routes = [
  {
    path: '',
    component: DashbordComponent,
    canActivate: [ControlAccesoGuard],
    children: [
      {
        path: 'personajes',
        loadChildren: () => import('./Personajes/module-personajes.module').then((module) => module.ModulePersonajesModule),
      },
      {
        path: 'series',
        loadChildren: () => import('./Peliculas/module-peliculas.module').then((module) => module.ModulePeliculasModule)
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
