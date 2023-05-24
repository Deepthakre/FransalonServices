import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpmenuPageRoutingModule } from './spmenu-routing.module';

import { SpmenuPage } from './spmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpmenuPageRoutingModule
  ],
  declarations: [SpmenuPage]
})
export class SpmenuPageModule {}
