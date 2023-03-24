import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCardsLocalidadComponent } from './lista-cards-localidad/lista-cards-localidad.component';
import { LocalidadDetalleComponent } from './localidad-detalle/localidad-detalle.component';
import { LocalidadComponent } from './localidad.component';

const routes: Routes = [{ path: '', component: LocalidadComponent },
{ path: 'detalle', component: LocalidadDetalleComponent },
{ path: 'listaCards', component: ListaCardsLocalidadComponent },
{ path: 'detalle/:id', component: LocalidadDetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalidadRoutingModule { }
