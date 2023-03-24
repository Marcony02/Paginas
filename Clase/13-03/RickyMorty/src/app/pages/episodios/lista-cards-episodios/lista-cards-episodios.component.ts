import { Component } from '@angular/core';
import { EpisodioModal } from 'src/app/shared/models/episodiosModel';
import { InfoModel } from 'src/app/shared/models/infoModel';
import { EpisodiosService } from 'src/app/shared/services/episodios.service';
import { EpisodiosModule } from '../episodios.module';

@Component({
  selector: 'app-lista-cards-episodios',
  templateUrl: './lista-cards-episodios.component.html',
  styleUrls: ['./lista-cards-episodios.component.css']
})
export class ListaCardsEpisodiosComponent {

  lista: EpisodioModal[] = [];
  info: InfoModel;
  constructor(private EpisodiosSrv: EpisodiosService) {}

  ngOnInit(): void {
    this.getEpisodios('https://rickandmortyapi.com/api/episode');
  }

  next(): void {
    this.getEpisodios(this.info.next);
  }
  preview(): void {
    this.getEpisodios(this.info.prev);
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  getEpisodios(url: string) {
    this.EpisodiosSrv.getEpisodios(url).subscribe((data: any) => {
      this.lista = [];
      const { info, results } = data;
      this.lista = [...this.lista, ...results];
      this.info = info;
    });
  }
}



