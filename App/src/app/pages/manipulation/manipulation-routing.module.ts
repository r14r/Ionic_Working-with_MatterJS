import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManipulationPage } from './manipulation.page';

const routes: Routes = [
  {
    path: '',
    component: ManipulationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManipulationPageRoutingModule {}
