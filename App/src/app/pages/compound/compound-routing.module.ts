import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompoundPage } from './compound.page';

const routes: Routes = [
  {
    path: '',
    component: CompoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompoundPageRoutingModule {}
