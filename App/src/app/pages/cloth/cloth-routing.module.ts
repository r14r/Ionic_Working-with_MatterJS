import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClothPage } from './cloth.page';

const routes: Routes = [
  {
    path: '',
    component: ClothPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothPageRoutingModule {}
