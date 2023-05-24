import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatPageRoutingModule } from './creat-routing.module';

import { CreatPage } from './creat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatPageRoutingModule
  ],
  declarations: [CreatPage]
})
export class CreatPageModule {}
