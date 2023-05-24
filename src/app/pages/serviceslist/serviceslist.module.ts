import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceslistPageRoutingModule } from './serviceslist-routing.module';

import { ServiceslistPage } from './serviceslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceslistPageRoutingModule
  ],
  declarations: [ServiceslistPage]
})
export class ServiceslistPageModule {}
