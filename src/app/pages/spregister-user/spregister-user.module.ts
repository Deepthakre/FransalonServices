import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpregisterUserPageRoutingModule } from './spregister-user-routing.module';

import { SpregisterUserPage } from './spregister-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpregisterUserPageRoutingModule
  ],
  declarations: [SpregisterUserPage]
})
export class SpregisterUserPageModule {}
