import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpServiceListPageRoutingModule } from './sp-service-list-routing.module';

import { SpServiceListPage } from './sp-service-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpServiceListPageRoutingModule
  ],
  declarations: [SpServiceListPage]
})
export class SpServiceListPageModule {}
