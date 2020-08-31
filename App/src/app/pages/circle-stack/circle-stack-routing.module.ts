import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircleStackPage } from './circle-stack.page';

const routes: Routes = [
  {
    path: '',
    component: CircleStackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircleStackPageRoutingModule {}
