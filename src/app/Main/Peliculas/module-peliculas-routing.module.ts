import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaPeliculasComponent } from './Pages/vista-peliculas.component';

const routes: Routes = [
  {
    path: '',
    component: VistaPeliculasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulePeliculasRoutingModule { }
