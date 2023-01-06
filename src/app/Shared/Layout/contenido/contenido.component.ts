import { Component, OnInit } from '@angular/core';
import { ConexionApiService } from 'src/app/Core/Servicios/conexion-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

Personajes: Observable<any> | undefined;
  
constructor(private personajesService: ConexionApiService) { }

  ngOnInit(): void {
    this.getPersonajes();  
  }

getPersonajes(){
  this.Personajes = this.personajesService.obtenerPersonajes();
}
}
