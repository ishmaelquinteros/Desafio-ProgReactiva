import { Component } from '@angular/core';
import { ConexionApiService } from 'src/app/Core/Servicios/conexion-api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProgramacionReactiva-Quinteros';
   
  constructor(private personajesService: ConexionApiService) { }
  
  
}
