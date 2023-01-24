import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule} from '@angular/platform-browser/animations'
import { DescripcionComponent } from './Shared/Pages/descripcion/descripcion.component';
import { ModAngularMaterialModule } from './Shared/Modulos/mod-angular-material/mod-angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DescripcionComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ModAngularMaterialModule,
    HttpClientModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
