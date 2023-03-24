import { Component,OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { PersonajesService } from 'src/app/shared/services/personajes.service';
import { PersonajesModule } from './personajes.module';
import {MatPaginator} from '@angular/material/paginator';
import { InfoModel } from 'src/app/shared/models/infoModel';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit,AfterViewInit {

  lista:PersonajesModule []=[];

constructor(private personajesSrv: PersonajesService){}

info:InfoModel;

displayedColumns: string[] = ['id','name','species','gender','image','created'];
dataSource = []

@ViewChild(MatPaginator) paginator: MatPaginator;

ngAfterViewInit() {
 // this.dataSource.paginator = this.paginator;
}
next(): void{

 this.getPersonajes(this.info.next)

}

preview(): void{
  
this.getPersonajes(this.info.prev)

}
ngOnInit() :void{

this.getPersonajes('https://rickandmortyapi.com/api/character')


};


getPersonajes(url:string){

    this.personajesSrv.getPersonajes(url).subscribe((data:any)=>{
      const {info,results}=data;
      this.dataSource=results;
      this.info=info;
      console.log(this.info);
  });
}


}
