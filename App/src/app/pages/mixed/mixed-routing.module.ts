import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MixedPage } from './mixed.page';

const routes: Routes = [
  {
    path: '',
    component: MixedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MixedPageRoutingModule {}
