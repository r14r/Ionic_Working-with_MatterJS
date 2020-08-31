import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoublePendulumPageRoutingModule } from './double-pendulum-routing.module';

import { DoublePendulumPage } from './double-pendulum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoublePendulumPageRoutingModule
  ],
  declarations: [DoublePendulumPage]
})
export class DoublePendulumPageModule {}
