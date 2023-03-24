import { Component, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EpisodioModal } from 'src/app/shared/models/episodiosModel';
import { InfoModel } from 'src/app/shared/models/infoModel';
import { PersonajeModal } from 'src/app/shared/models/personajesModel';
import { PersonajesService } from 'src/app/shared/services/personajes.service';
import { EpisodiosService } from 'src/app/shared/services/episodios.service';
import { detalle } from 'src/app/shared/models/detalles';

@Component({
  selector: 'app-personajes-detalle',
  templateUrl: './personajes-detalle.component.html',
  styleUrls: ['./personajes-detalle.component.css']
})


export class PersonajesDetalleComponent implements OnInit,OnDestroy {

 
  info:InfoModel;
personaje:detalle;


constructor( route: ActivatedRoute, srv:PersonajesService, private srvEpi:EpisodiosService,private rauter:Router ) {
 
  const id = route.snapshot.paramMap.get('id');

  srv.getPersonajeById(id).subscribe((result: any) => {
    this.personaje = result;
    // console.log(this.personaje); 
  });

}

ngOnChanges(changes: SimpleChanges): void {
  console.log('Changes =>', changes)
}

ngOnInit(): void {
  console.log('OnInit =>')
}

ngOnDestroy(): void {
  // console.log('OnDestroy =>')
}

getIdEpisodios(episodios: string) {
  let link = episodios.split("episodios/");
  let idlink = link[1];
  // console.log(idlink)
  return idlink;
}

sendEpisodios(episodios: string) {
  // console.log(episode)
  this.srvEpi.setUrlEpi(episodios);
  this.rauter.navigate(['/episodios/episodios-detalle']);
  // this.srvEpi.triggerEpisode.emit(episode);
}

}



