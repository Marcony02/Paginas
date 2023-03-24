import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'Empleados', loadChildren: () => import('./pages/List/empleado/empleado.module').then(m => m.EmpleadoModule) },
 { path: 'Empleados', loadChildren: () => import('./pages/List/empleado/empleado.module').then(m => m.EmpleadoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
