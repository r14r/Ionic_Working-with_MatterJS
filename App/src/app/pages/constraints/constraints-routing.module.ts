import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstraintsPage } from './constraints.page';

const routes: Routes = [
  {
    path: '',
    component: ConstraintsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstraintsPageRoutingModule {}
