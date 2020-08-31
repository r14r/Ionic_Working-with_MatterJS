import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Stress2Page } from './stress2.page';

const routes: Routes = [
  {
    path: '',
    component: Stress2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Stress2PageRoutingModule {}
