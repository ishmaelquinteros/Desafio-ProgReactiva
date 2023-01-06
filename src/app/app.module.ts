import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DescripcionComponent } from './Shared/Pages/descripcion/descripcion.component';
import { ModAngularMaterialModule } from './Shared/Modulos/mod-angular-material/mod-angular-material.module';
import { EncabezadoComponent } from './Shared/Layout/encabezado/encabezado.component';
import { ContenidoComponent } from './Shared/Layout/contenido/contenido.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DescripcionComponent,
    EncabezadoComponent,
    ContenidoComponent,
  ],
  imports: [
    BrowserModule,
    ModAngularMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
