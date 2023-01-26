import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConexionApiService } from 'src/app/Core/Servicios/conexion-api.service';
@Component({
  selector: 'app-vista-peliculas',
  templateUrl: './vista-peliculas.component.html',
  styleUrls: ['./vista-peliculas.component.css']
})
export class VistaPeliculasComponent implements OnInit {

  Series$: Observable<any> | undefined;
  
  constructor(private serieService: ConexionApiService) {
    this.getSeries()
   }

  ngOnInit(): void {
  }

  getSeries(){
    this.Series$ = this.serieService.obtenerSeries();
  }
}
