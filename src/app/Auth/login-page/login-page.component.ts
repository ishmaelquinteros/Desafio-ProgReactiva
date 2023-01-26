import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public formulario: FormGroup;
  email!: string;
  password!: string;

  constructor(public userService: LoginService,
    private router: Router ) {
    this.formulario = new FormGroup({
      email: new FormControl('eve.holt@reqres.in', [Validators.required, Validators.email]),
      password: new FormControl('cityslicka', [Validators.required]),
    });
   }

  ngOnInit(): void {}
  
  login(){
    const user = {email: this.formulario.get('email')?.value, 
    password: this.formulario.get('password')?.value }
    this.userService.login(user).subscribe(data => {
      this.userService.setToken(JSON.stringify(data))
      this.router.navigateByUrl('/main/personajes');
    },
    );
  }
}