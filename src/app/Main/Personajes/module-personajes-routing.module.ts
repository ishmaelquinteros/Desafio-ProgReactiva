import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VistaPersonajesComponent } from './Pages/vista-personajes.component';

const routes: Routes = [
  {
    path: '',
    component: VistaPersonajesComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulePersonajesRoutingModule { }
