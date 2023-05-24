import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SploginPageRoutingModule } from './splogin-routing.module';

import { SploginPage } from './splogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SploginPageRoutingModule
  ],
  declarations: [SploginPage]
})
export class SploginPageModule {}
