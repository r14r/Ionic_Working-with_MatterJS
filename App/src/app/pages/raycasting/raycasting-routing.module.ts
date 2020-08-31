import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaycastingPage } from './raycasting.page';

const routes: Routes = [
  {
    path: '',
    component: RaycastingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaycastingPageRoutingModule {}
