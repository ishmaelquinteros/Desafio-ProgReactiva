import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';
import { ConexionApiService } from 'src/app/Core/Servicios/conexion-api.service';


@Component({
  selector: 'app-vista-personajes',
  templateUrl: './vista-personajes.component.html',
  styleUrls: ['./vista-personajes.component.css']
})
export class VistaPersonajesComponent implements OnInit {

Personajes$: Observable<any> | undefined; 

buscarControl = new FormControl('');

  constructor(private personajesService: ConexionApiService) { 
    this.getPersonajes();
  }

  ngOnInit(): void {
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
