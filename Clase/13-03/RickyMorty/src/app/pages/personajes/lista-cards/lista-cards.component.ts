import { Component } from '@angular/core';
import { InfoModel } from 'src/app/shared/models/infoModel';
import { PersonajeModal } from 'src/app/shared/models/personajesModel';
import { PersonajesService } from 'src/app/shared/services/personajes.service';
import { EpisodioModal } from 'src/app/shared/models/episodiosModel';
import { EpisodiosService } from 'src/app/shared/services/episodios.service';

@Component({
  selector: 'app-lista-cards',
  templateUrl: './lista-cards.component.html',
  styleUrls: ['./lista-cards.component.css']
})
export class ListaCardsComponent {
  lista: PersonajeModal[] = [];
  listae:EpisodioModal[]=[];
  info: InfoModel;
  constructor(private personjesSrv: PersonajesService) {}

  ngOnInit(): void {
    this.getPersonajes('https://rickandmortyapi.com/api/character');
  }

  next(): void {
    this.getPersonajes(this.info.next);
  }
  preview(): void {
    this.getPersonajes(this.info.prev);
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  getPersonajes(url: string) {
    this.personjesSrv.getPersonajes(url).subscribe((data: any) => {
      this.lista = [];
      const { info, results } = data;
      this.lista = [...this.lista, ...results];
      this.info = info;
    });
  }
}