import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCardsComponent } from './lista-cards/lista-cards.component';
import { PersonajesDetalleComponent } from './personajes-detalle/personajes-detalle.component';
import { PersonajesComponent } from './personajes.component';

const routes: Routes = [
  { path: '', component: PersonajesComponent },
{ path: 'detalle', component: PersonajesDetalleComponent },
{ path: 'listaCards', component: ListaCardsComponent },
{ path: 'detalle/:id', component: PersonajesDetalleComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
