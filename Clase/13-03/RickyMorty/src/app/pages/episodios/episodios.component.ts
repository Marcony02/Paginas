import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { InfoModel } from 'src/app/shared/models/infoModel';
import { EpisodiosService } from 'src/app/shared/services/episodios.service';
import { EpisodiosModule } from './episodios.module';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {


 Lista:EpisodiosModule []=[];


 constructor(private episodiosSrv:EpisodiosService){}

  info:InfoModel;
  displayedColumns:string[]=['id','name','air_date','episode','url','create']
  dataSource=[]
  
  getEpisodios(url:string){

    this.episodiosSrv.getEpisodios(url).subscribe((data:any)=>{
      const {info,results}=data;
      this.dataSource=results;
      this.info=info;
      console.log(this.info);
  });
}

  next():void{

    this.getEpisodios(this.info.next)

  }

  preview():void{

    this.getEpisodios(this.info.prev)

  }


  ngOnInit():void{

    this.getEpisodios("https://rickandmortyapi.com/api/episode")

  }



  
}
