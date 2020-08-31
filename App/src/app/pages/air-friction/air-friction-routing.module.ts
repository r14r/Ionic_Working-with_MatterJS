import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirFrictionPage } from './air-friction.page';

const routes: Routes = [
  {
    path: '',
    component: AirFrictionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirFrictionPageRoutingModule {}
