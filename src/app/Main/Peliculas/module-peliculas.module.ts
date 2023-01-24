import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulePeliculasRoutingModule } from './module-peliculas-routing.module';
import { VistaPeliculasComponent } from './Pages/vista-peliculas.component';
import { ModAngularMaterialModule } from 'src/app/Shared/Modulos/mod-angular-material/mod-angular-material.module';


@NgModule({
  declarations: [
    VistaPeliculasComponent
  ],
  imports: [
    CommonModule,
    ModulePeliculasRoutingModule,
    ModAngularMaterialModule,
  ]
})
export class ModulePeliculasModule { }
