import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalidadModal } from '../models/localidadModal';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {
  constructor(private http:HttpClient) { }
  getLocalidad(url:string):Observable<any>{
    return this.http.get(url);

  }

  getlocalidadById(id: any): Observable<LocalidadModal> {
    return this.http.get<LocalidadModal>(
      'https://rickandmortyapi.com/api/location/' + id
    );
  }
}





