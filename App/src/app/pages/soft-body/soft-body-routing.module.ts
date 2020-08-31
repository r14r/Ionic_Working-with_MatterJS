import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftBodyPage } from './soft-body.page';

const routes: Routes = [
  {
    path: '',
    component: SoftBodyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftBodyPageRoutingModule {}
