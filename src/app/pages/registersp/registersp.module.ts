import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterspPageRoutingModule } from './registersp-routing.module';

import { RegisterspPage } from './registersp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterspPageRoutingModule
  ],
  declarations: [RegisterspPage]
})
export class RegisterspPageModule {}
