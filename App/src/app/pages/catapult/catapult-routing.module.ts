import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatapultPage } from './catapult.page';

const routes: Routes = [
  {
    path: '',
    component: CatapultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatapultPageRoutingModule {}
