import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { PersonajeModal } from '../models/personajesModel';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  constructor(private http: HttpClient) {}
  getPersonajes(url: string): Observable<any> {
    return this.http.get(url);
  }

  getPersonajeById(id: any): Observable<PersonajeModal> {
    return this.http.get<PersonajeModal>(
      'https://rickandmortyapi.com/api/character/' + id
    );
  }
 
  urlEpisodio:String;

  setUrlEpisodio(url:String):void{

    this.urlEpisodio=url;


  }

  getUrlEpisode():String{

    return this.urlEpisodio
  }

}
