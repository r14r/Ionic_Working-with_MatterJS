import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestitutionPage } from './restitution.page';

const routes: Routes = [
  {
    path: '',
    component: RestitutionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestitutionPageRoutingModule {}
