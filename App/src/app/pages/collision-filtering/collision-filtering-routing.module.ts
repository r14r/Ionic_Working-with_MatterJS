import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollisionFilteringPage } from './collision-filtering.page';

const routes: Routes = [
  {
    path: '',
    component: CollisionFilteringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollisionFilteringPageRoutingModule {}
