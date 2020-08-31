import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoundedPage } from './rounded.page';

const routes: Routes = [
  {
    path: '',
    component: RoundedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoundedPageRoutingModule {}
