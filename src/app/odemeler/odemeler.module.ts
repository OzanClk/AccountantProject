import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdemelerPageRoutingModule } from './odemeler-routing.module';

import { OdemelerPage } from './odemeler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdemelerPageRoutingModule
  ],
  declarations: [OdemelerPage]
})
export class OdemelerPageModule {}
