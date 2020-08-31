import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WreckingBallPage } from './wrecking-ball.page';

const routes: Routes = [
  {
    path: '',
    component: WreckingBallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WreckingBallPageRoutingModule {}
