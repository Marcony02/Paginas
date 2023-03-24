import { Component,OnInit,AfterContentInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { InfoModel } from 'src/app/shared/models/infoModel';
import { LocalidadService } from 'src/app/shared/services/localidad.service';
import { LocalidadModule } from './localidad.module';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css']
})
export class LocalidadComponent implements OnInit {

  lista:LocalidadModule[]=[]; 
  displayedColumns:string[]=['id','name','type','dimension','url','created']
  dataSource=[]
  constructor(private localidadSrv:LocalidadService){}
 

  getLocalidad(url: string) {
    this.localidadSrv.getLocalidad(url).subscribe((data: any) => {
      const { info, results } = data;
      this.dataSource = results;
      this.info = info;
      console.log(this.dataSource);
    });
  }

  info:InfoModel;

 


  next():void{

    this.getLocalidad(this.info.next)

  }

  preview():void{

    this.getLocalidad(this.info.prev)

  }

  ngOnInit():void{

    this.getLocalidad("https://rickandmortyapi.com/api/location")

  }
}
