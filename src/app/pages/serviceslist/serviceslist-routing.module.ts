import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceslistPage } from './serviceslist.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceslistPageRoutingModule {}
