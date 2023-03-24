import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { EmpleadoComponent } from './empleado.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    EmpleadoComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    MaterialModule
  ]
})
export class EmpleadoModule { }
