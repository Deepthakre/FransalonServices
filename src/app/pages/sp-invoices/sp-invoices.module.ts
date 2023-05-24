import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpInvoicesPageRoutingModule } from './sp-invoices-routing.module';

import { SpInvoicesPage } from './sp-invoices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpInvoicesPageRoutingModule
  ],
  declarations: [SpInvoicesPage]
})
export class SpInvoicesPageModule {}
