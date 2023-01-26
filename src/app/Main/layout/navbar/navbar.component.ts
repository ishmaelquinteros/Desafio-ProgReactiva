import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/Auth/Service/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: string | null;
  bandera!: boolean
  
  constructor(public login: LoginService) { 
  
 this.token = this.login.getToken()
 this.token ? this.bandera = true : false
}



  ngOnInit(): void {
  }

}
