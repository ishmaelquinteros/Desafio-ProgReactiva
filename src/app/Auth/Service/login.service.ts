import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any>{
    return this.http.post("https://reqres.in/api/login", user)
  }
    
setToken(token: string){
  localStorage.setItem('token', token);
}

getToken(){
  return localStorage.getItem('token');
}
}


