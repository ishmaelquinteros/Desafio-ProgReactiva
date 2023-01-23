import { Component } from '@angular/core';
import { ConexionApiService } from 'src/app/Core/Servicios/conexion-api.service';
import { debounceTime, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})

export class ContenidoComponent {

buscarControl = new FormControl('');
filtrarPersonje = '';

Personajes$: Observable<any> | undefined;

constructor(private personajesService: ConexionApiService) { 
 this.getPersonajes();

this.buscarControl.valueChanges.pipe(debounceTime(1000))
  .subscribe((value => {
    this.personajesService.filtrarPersonajes(value!)
  }))
}
  
getPersonajes(){
  this.Personajes$ = this.personajesService.personajes$;
}

limpiarInput(){
  if (this.buscarControl){
  this.buscarControl.setValue("")}
}

}
