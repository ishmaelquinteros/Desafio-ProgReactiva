import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Auth/Service/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: string | null = ""
  bandera!: boolean
  
  constructor(public login: LoginService) { 
  
  this.login.getToken() ? this.token = "usuario logueado" : "no se encontro usuario"
  
  }

  ngOnInit(): void {
  }

}
