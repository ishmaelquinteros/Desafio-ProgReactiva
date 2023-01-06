import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConexionApiService {

  PublicKey = "899a52a5faa781a6238d57cc30599d40";
  Hash="7a727293cc634e3c917c3706db5ebeda";
  UrlApi = `http://gateway.marvel.com/v1/public/characters?ts=100&apikey=${this.PublicKey}&hash=${this.Hash}`;

  constructor(private http: HttpClient) { }

  obtenerPersonajes(): Observable<any> {
    console.log(this.UrlApi)
    return this.http.get<any>(this.UrlApi).pipe(map((data: any) => data.data.results))
    }
}
