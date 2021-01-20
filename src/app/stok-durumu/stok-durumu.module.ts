import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StokDurumuPageRoutingModule } from './stok-durumu-routing.module';

import { StokDurumuPage } from './stok-durumu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StokDurumuPageRoutingModule
  ],
  declarations: [StokDurumuPage]
})
export class StokDurumuPageModule {}
