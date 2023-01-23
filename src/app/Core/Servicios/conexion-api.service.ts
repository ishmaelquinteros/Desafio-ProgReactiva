import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ConexionApiService {
  
  public personajes$: Observable<any[]>;
  public personajes = new BehaviorSubject<any[]>([])


  private PublicKey = "899a52a5faa781a6238d57cc30599d40";
  private Hash="7a727293cc634e3c917c3706db5ebeda";
  private UrlApi = `http://gateway.marvel.com/v1/public/characters?limit=20&orderBy=name%2Cmodified&ts=100&apikey=${this.PublicKey}&hash=${this.Hash}`;
  //private UrlInicio = `http://gateway.marvel.com/v1/public/characters?limit=20&orderBy=name%2Cmodified&ts=100&apikey=${this.PublicKey}&hash=${this.Hash}`;
  
  constructor(private http: HttpClient) { 
    this.personajes$ = this.personajes.asObservable();
    this.obtenerPersonajes().subscribe(person => {
      this.personajes.next(person)
    })
  }

  obtenerPersonajes(): Observable<any> {
    return this.http.get<any>(this.UrlApi).pipe(map((data: any) => data.data.results))
     
  }
  
  filtrarPersonajes(nombre:string){
    this.UrlApi = `http://gateway.marvel.com/v1/public/characters?limit=20&orderBy=name%2Cmodified&ts=100&apikey=${this.PublicKey}&hash=${this.Hash}`;
    this.UrlApi += `&nameStartsWith=${nombre}`   
    this.obtenerPersonajes().subscribe(person => {
      this.personajes.next(person)
    })
  }
}