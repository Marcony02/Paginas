import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpleadosModel } from '../Models/EmpleadosModel';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  



  constructor(private http:HttpClient) { }

  getEmpleados(url:string):Observable<any>{
    return this.http.get(url)
  }

  
}
