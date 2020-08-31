import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompoundStackPage } from './compound-stack.page';

const routes: Routes = [
  {
    path: '',
    component: CompoundStackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompoundStackPageRoutingModule {}
