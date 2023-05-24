import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpupdateTaskPage } from './spupdate-task.page';

const routes: Routes = [
  {
    path: '',
    component: SpupdateTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpupdateTaskPageRoutingModule {}
