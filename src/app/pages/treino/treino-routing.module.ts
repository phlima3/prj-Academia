import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreinoPage } from './treino.page';

const routes: Routes = [
  {
    path: '',
    component: TreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreinoPageRoutingModule {}
