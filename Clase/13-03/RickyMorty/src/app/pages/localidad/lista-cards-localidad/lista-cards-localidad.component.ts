import { Component } from '@angular/core';
import { InfoModel } from 'src/app/shared/models/infoModel';
import { LocalidadModal } from 'src/app/shared/models/localidadModal';
import { LocalidadService } from 'src/app/shared/services/localidad.service';

@Component({
  selector: 'app-lista-cards-localidad',
  templateUrl: './lista-cards-localidad.component.html',
  styleUrls: ['./lista-cards-localidad.component.css']
})
export class ListaCardsLocalidadComponent {
  lista: LocalidadModal[] = [];
  info: InfoModel;
  constructor(private localidadSrv: LocalidadService) {}

  ngOnInit(): void {
    this.getlocalidad('https://rickandmortyapi.com/api/location');
  }

  next(): void {
    this.getlocalidad(this.info.next);
  }
  preview(): void {
    this.getlocalidad(this.info.prev);
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  getlocalidad(url: string) {
    this.localidadSrv.getLocalidad(url).subscribe((data: any) => {
      this.lista = [];
      const { info, results } = data;
      this.lista = [...this.lista, ...results];
      this.info = info;
    });
  }
}

