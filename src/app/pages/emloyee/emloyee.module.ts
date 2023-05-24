import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmloyeePageRoutingModule } from './emloyee-routing.module';

import { EmloyeePage } from './emloyee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmloyeePageRoutingModule
  ],
  declarations: [EmloyeePage]
})
export class EmloyeePageModule {}
