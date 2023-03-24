import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalidadRoutingModule } from './localidad-routing.module';
import { LocalidadComponent } from './localidad.component';
import { MaterialModule } from 'src/app/material.module';
import { ListaCardsLocalidadComponent } from './lista-cards-localidad/lista-cards-localidad.component';
import { LocalidadDetalleComponent } from './localidad-detalle/localidad-detalle.component';


@NgModule({
  declarations: [
    LocalidadComponent,
    ListaCardsLocalidadComponent,
    LocalidadDetalleComponent
  ],
  imports: [
    CommonModule,
    LocalidadRoutingModule,
    MaterialModule
  ]
})
export class LocalidadModule { }
