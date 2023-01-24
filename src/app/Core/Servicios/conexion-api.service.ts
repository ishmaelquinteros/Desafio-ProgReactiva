import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConexionApiService {
  
  public personajes$: Observable<any[]>;
  public personajes = new BehaviorSubject<any[]>([])

  // public series$: Observable<any>[];
  public series = new BehaviorSubject<any[]>([])

  private PublicKey = "899a52a5faa781a6238d57cc30599d40";
  private Hash="7a727293cc634e3c917c3706db5ebeda";
  
  private UrlApiPersonajes = `http://gateway.marvel.com/v1/public/characters?limit=20&orderBy=name%2Cmodified&ts=100&apikey=${this.PublicKey}&hash=${this.Hash}`;
  private UrlApiSeries = `http://gateway.marvel.com/v1/public/series?limit=20&orderBy=title&ts=100&apikey=${this.PublicKey}&hash=${this.Hash}`;
  
  constructor(private http: HttpClient) { 
   
    this.personajes$ = this.personajes.asObservable();
    
    this.obtenerPersonajes().subscribe(person => {
      this.personajes.next(person)
    });
    
   // this.series$ = this.series.asObservable();

    //this.obtenerSeries().subscribe(serie => {
      //this.series.next(serie)
    //});
  }

  obtenerPersonajes(): Observable<any> {
    return this.http.get<any>(this.UrlApiPersonajes).pipe(map((data: any) => data.data.results))  
  }

  obtenerSeries(): Observable<any>{
    return this.http.get<any>(this.UrlApiSeries).pipe(map((data: any) => data.data.results))
  }
  
  filtrarPersonajes(nombre:string){
    this.UrlApiPersonajes = `http://gateway.marvel.com/v1/public/characters?limit=20&orderBy=name%2Cmodified&ts=100&apikey=${this.PublicKey}&hash=${this.Hash}`;
    this.UrlApiPersonajes += `&nameStartsWith=${nombre}`   
    this.obtenerPersonajes().subscribe(person => {
      this.personajes.next(person)
    })
  }
}