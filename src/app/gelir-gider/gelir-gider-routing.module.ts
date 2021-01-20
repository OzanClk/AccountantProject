import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GelirGiderPage } from './gelir-gider.page';

const routes: Routes = [
  {
    path: '',
    component: GelirGiderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GelirGiderPageRoutingModule {}
