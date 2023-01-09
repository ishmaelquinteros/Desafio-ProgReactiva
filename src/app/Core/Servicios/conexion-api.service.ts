import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConexionApiService {

  private PublicKey = "899a52a5faa781a6238d57cc30599d40";
  private Hash="7a727293cc634e3c917c3706db5ebeda";
  private UrlApi = `http://gateway.marvel.com/v1/public/characters?limit=50&orderBy=name%2Cmodified&ts=100&apikey=${this.PublicKey}&hash=${this.Hash}`;

  constructor(private http: HttpClient) { }

  obtenerPersonajes(): Observable<any> {
    return this.http.get<any>(this.UrlApi).pipe(map((data: any) => data.data.results))
  }
  
  filtrarPersonajes(data:string){
    this.UrlApi += `&nameStartsWith=${data}`  
    return this.http.get<any>(this.UrlApi).pipe(map((data: any) => data.data.results))
    }
}
