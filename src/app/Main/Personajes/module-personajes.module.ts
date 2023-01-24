import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePersonajesRoutingModule } from './module-personajes-routing.module';
import { VistaPersonajesComponent } from './Pages/vista-personajes.component';
import { ModAngularMaterialModule } from 'src/app/Shared/Modulos/mod-angular-material/mod-angular-material.module';


@NgModule({
  declarations: [
    VistaPersonajesComponent
  ],
  imports: [
    CommonModule,
    ModulePersonajesRoutingModule,
    ModAngularMaterialModule,
  ],
})
export class ModulePersonajesModule { }
