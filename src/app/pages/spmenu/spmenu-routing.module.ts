import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpmenuPage } from './spmenu.page';

const routes: Routes = [
  {
    path: '',
    component: SpmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpmenuPageRoutingModule {}
