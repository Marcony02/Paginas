import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EpisodioModal } from '../models/episodiosModel';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {
  urlEpi: string;
  @Output() triggerEpisode = new EventEmitter<string>();

  setUrlEpi(url: string): void {
    this.urlEpi = url;
  }


  getUrlEpi(): string {
    return this.urlEpi;
  }

  constructor(private http: HttpClient) { }
  getEpisodios(url:string):Observable<any>{
    return this.http.get(url);


  }

 getEpisodiosByUrl(url?: string): Observable<EpisodioModal> {
    if (url) {
      console.log('v')
      return this.http.get<EpisodioModal>(url);
    } else {
      console.log(this.urlEpi)
      return this.http.get<EpisodioModal>(this.urlEpi);
    }
  }
  getEpisodiosById(id: any): Observable<EpisodioModal> {
    return this.http.get<EpisodioModal>(
      'https://rickandmortyapi.com/api/episode/' + id
    );
  }
  
 
 

  



}



