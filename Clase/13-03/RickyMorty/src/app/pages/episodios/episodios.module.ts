import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodiosRoutingModule } from './episodios-routing.module';
import { EpisodiosComponent } from './episodios.component';
import { MaterialModule } from 'src/app/material.module';
import { EpisodiosDetalleComponent } from './episodios-detalle/episodios-detalle.component';
import { ListaCardsEpisodiosComponent } from './lista-cards-episodios/lista-cards-episodios.component';


@NgModule({
  declarations: [
    EpisodiosComponent,
    EpisodiosDetalleComponent,
    ListaCardsEpisodiosComponent
  ],
  imports: [
    CommonModule,
    EpisodiosRoutingModule,
    MaterialModule
  ]
})
export class EpisodiosModule { }
