import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaddTaskPage } from './spadd-task.page';

const routes: Routes = [
  {
    path: '',
    component: SpaddTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaddTaskPageRoutingModule {}
