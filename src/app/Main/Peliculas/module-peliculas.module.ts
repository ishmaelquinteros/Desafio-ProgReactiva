import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulePeliculasRoutingModule } from './module-peliculas-routing.module';
import { VistaPeliculasComponent } from './Pages/vista-peliculas.component';


@NgModule({
  declarations: [
    VistaPeliculasComponent
  ],
  imports: [
    CommonModule,
    ModulePeliculasRoutingModule
  ]
})
export class ModulePeliculasModule { }
