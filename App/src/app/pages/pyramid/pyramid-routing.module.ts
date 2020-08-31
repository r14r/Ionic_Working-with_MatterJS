import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyramidPage } from './pyramid.page';

const routes: Routes = [
  {
    path: '',
    component: PyramidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyramidPageRoutingModule {}
