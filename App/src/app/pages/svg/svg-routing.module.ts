import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SvgPage } from './svg.page';

const routes: Routes = [
  {
    path: '',
    component: SvgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SvgPageRoutingModule {}
