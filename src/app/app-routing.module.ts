import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlAccesoGuard } from './Auth/Guard/control-acceso.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./Main/module-main.module').then((module) => module.ModuleMainModule),
    canLoad: [ControlAccesoGuard]    
  },
  {
    path: 'login',
    loadChildren: () => import('./Auth/modulo-auth.module').then((module) => module.ModuloAuthModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
