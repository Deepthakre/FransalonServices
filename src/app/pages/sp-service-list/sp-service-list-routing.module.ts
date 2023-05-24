import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpServiceListPage } from './sp-service-list.page';

const routes: Routes = [
  {
    path: '',
    component: SpServiceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpServiceListPageRoutingModule {}
