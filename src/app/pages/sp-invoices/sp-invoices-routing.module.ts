import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpInvoicesPage } from './sp-invoices.page';

const routes: Routes = [
  {
    path: '',
    component: SpInvoicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpInvoicesPageRoutingModule {}
