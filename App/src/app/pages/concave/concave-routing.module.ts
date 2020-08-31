import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcavePage } from './concave.page';

const routes: Routes = [
  {
    path: '',
    component: ConcavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcavePageRoutingModule {}
