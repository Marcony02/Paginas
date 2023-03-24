import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'Rick', loadChildren: () => import('./pages/rick/rick.module').then(m => m.RickModule) }, { path: 'Rick', loadChildren: () => import('./pages/rick/rick.module').then(m => m.RickModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
