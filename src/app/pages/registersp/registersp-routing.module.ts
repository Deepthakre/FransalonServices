import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterspPage } from './registersp.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterspPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterspPageRoutingModule {}
