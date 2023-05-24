import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SphomePageRoutingModule } from './sphome-routing.module';

import { SphomePage } from './sphome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SphomePageRoutingModule
  ],
  declarations: [SphomePage]
})
export class SphomePageModule {}
