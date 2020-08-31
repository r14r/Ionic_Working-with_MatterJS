import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrictionPage } from './friction.page';

const routes: Routes = [
  {
    path: '',
    component: FrictionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrictionPageRoutingModule {}
