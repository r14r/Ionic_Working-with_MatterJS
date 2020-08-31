import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinimalPage } from './minimal.page';

const routes: Routes = [
  {
    path: '',
    component: MinimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinimalPageRoutingModule {}
