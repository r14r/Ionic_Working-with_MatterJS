import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BallPoolPageRoutingModule } from './ball-pool-routing.module';

import { BallPoolPage } from './ball-pool.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BallPoolPageRoutingModule
  ],
  declarations: [BallPoolPage]
})
export class BallPoolPageModule {}
