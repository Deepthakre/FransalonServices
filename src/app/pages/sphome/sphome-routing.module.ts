import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SphomePage } from './sphome.page';

const routes: Routes = [
  {
    path: '',
    component: SphomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SphomePageRoutingModule {}
