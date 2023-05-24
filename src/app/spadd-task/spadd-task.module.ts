import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaddTaskPageRoutingModule } from './spadd-task-routing.module';

import { SpaddTaskPage } from './spadd-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaddTaskPageRoutingModule
  ],
  declarations: [SpaddTaskPage]
})
export class SpaddTaskPageModule {}
