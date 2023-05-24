import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatPage } from './creat.page';

const routes: Routes = [
  {
    path: '',
    component: CreatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatPageRoutingModule {}
