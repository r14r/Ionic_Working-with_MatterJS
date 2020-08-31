import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RagdollPage } from './ragdoll.page';

const routes: Routes = [
  {
    path: '',
    component: RagdollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RagdollPageRoutingModule {}
