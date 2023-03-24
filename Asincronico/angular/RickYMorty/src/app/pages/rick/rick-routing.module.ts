import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickComponent } from './rick.component';

const routes: Routes = [{ path: '', component: RickComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RickRoutingModule { }
