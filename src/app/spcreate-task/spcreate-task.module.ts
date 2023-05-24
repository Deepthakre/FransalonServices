import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpcreateTaskPageRoutingModule } from './spcreate-task-routing.module';

import { SpcreateTaskPage } from './spcreate-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpcreateTaskPageRoutingModule
  ],
  declarations: [SpcreateTaskPage]
})
export class SpcreateTaskPageModule {}
