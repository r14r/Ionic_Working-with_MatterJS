import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepingPage } from './sleeping.page';

const routes: Routes = [
  {
    path: '',
    component: SleepingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepingPageRoutingModule {}
