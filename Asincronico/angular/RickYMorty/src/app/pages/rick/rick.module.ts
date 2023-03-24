import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickRoutingModule } from './rick-routing.module';
import { RickComponent } from './rick.component';


@NgModule({
  declarations: [
    RickComponent
  ],
  imports: [
    CommonModule,
    RickRoutingModule
  ]
})
export class RickModule { }
