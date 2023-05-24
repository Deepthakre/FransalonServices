import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpregisterUserPage } from './spregister-user.page';

const routes: Routes = [
  {
    path: '',
    component: SpregisterUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpregisterUserPageRoutingModule {}
