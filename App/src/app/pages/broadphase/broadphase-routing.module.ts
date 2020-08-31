import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BroadphasePage } from './broadphase.page';

const routes: Routes = [
  {
    path: '',
    component: BroadphasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BroadphasePageRoutingModule {}
