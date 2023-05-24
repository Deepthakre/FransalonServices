import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpcreateTaskPage } from './spcreate-task.page';

const routes: Routes = [
  {
    path: '',
    component: SpcreateTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpcreateTaskPageRoutingModule {}
