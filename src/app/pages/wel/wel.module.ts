import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelPageRoutingModule } from './wel-routing.module';

import { WelPage } from './wel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelPageRoutingModule
  ],
  declarations: [WelPage]
})
export class WelPageModule {}
