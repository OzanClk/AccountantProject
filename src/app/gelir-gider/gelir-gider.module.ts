import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GelirGiderPageRoutingModule } from './gelir-gider-routing.module';

import { GelirGiderPage } from './gelir-gider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GelirGiderPageRoutingModule
  ],
  declarations: [GelirGiderPage]
})
export class GelirGiderPageModule {}
