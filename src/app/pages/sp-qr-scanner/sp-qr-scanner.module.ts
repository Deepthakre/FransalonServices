import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpQrScannerPageRoutingModule } from './sp-qr-scanner-routing.module';

import { SpQrScannerPage } from './sp-qr-scanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpQrScannerPageRoutingModule
  ],
  declarations: [SpQrScannerPage]
})
export class SpQrScannerPageModule {}
