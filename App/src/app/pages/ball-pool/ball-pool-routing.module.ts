import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallPoolPage } from './ball-pool.page';

const routes: Routes = [
  {
    path: '',
    component: BallPoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallPoolPageRoutingModule {}
