import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelPage } from './wel.page';

const routes: Routes = [
  {
    path: '',
    component: WelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelPageRoutingModule {}
