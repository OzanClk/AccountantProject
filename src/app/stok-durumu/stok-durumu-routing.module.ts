import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StokDurumuPage } from './stok-durumu.page';

const routes: Routes = [
  {
    path: '',
    component: StokDurumuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StokDurumuPageRoutingModule {}
