import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimescalePage } from './timescale.page';

const routes: Routes = [
  {
    path: '',
    component: TimescalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimescalePageRoutingModule {}
