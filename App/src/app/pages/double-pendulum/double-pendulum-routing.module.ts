import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoublePendulumPage } from './double-pendulum.page';

const routes: Routes = [
  {
    path: '',
    component: DoublePendulumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoublePendulumPageRoutingModule {}
