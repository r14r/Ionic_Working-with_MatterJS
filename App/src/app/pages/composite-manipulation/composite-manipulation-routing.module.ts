import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompositeManipulationPage } from './composite-manipulation.page';

const routes: Routes = [
  {
    path: '',
    component: CompositeManipulationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompositeManipulationPageRoutingModule {}
