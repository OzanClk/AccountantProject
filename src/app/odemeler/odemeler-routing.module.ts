import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdemelerPage } from './odemeler.page';

const routes: Routes = [
  {
    path: '',
    component: OdemelerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdemelerPageRoutingModule {}
