import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MixedShapesPage } from './mixed-shapes.page';

const routes: Routes = [
  {
    path: '',
    component: MixedShapesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MixedShapesPageRoutingModule {}
