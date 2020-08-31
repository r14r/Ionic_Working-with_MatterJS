import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GravityPage } from './gravity.page';

const routes: Routes = [
  {
    path: '',
    component: GravityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GravityPageRoutingModule {}
