import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlingshotPage } from './slingshot.page';

const routes: Routes = [
  {
    path: '',
    component: SlingshotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlingshotPageRoutingModule {}
