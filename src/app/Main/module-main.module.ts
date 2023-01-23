import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleMainRoutingModule } from './module-main-routing.module';
import { DashbordComponent } from './dashbord.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { WrapperComponent } from './layout/wrapper/wrapper.component';



@NgModule({
  declarations: [
    DashbordComponent,
    NavbarComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule,
    ModuleMainRoutingModule,
  ]
})
export class ModuleMainModule { }
