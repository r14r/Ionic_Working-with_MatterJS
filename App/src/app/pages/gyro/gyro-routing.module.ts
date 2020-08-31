import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GyroPage } from './gyro.page';

const routes: Routes = [
  {
    path: '',
    component: GyroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GyroPageRoutingModule {}
