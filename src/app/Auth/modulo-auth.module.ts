import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ModuloAuthRoutingModule } from './modulo-auth-routing.module';
import { ModAngularMaterialModule } from '../Shared/Modulos/mod-angular-material/mod-angular-material.module';


@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    ModuloAuthRoutingModule,
    ModAngularMaterialModule,
  ]
})
export class ModuloAuthModule { }
