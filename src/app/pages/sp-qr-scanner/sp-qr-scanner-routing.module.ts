import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpQrScannerPage } from './sp-qr-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: SpQrScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpQrScannerPageRoutingModule {}
