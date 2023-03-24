import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodiosDetalleComponent } from './episodios-detalle/episodios-detalle.component';
import { EpisodiosComponent } from './episodios.component';
import { ListaCardsEpisodiosComponent } from './lista-cards-episodios/lista-cards-episodios.component';

const routes: Routes = [{ path: '', component: EpisodiosComponent },
{ path: 'detalle', component: EpisodiosDetalleComponent },
{ path: 'listaCards', component: ListaCardsEpisodiosComponent },
{ path: 'detalle/:id', component: EpisodiosDetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodiosRoutingModule { }
