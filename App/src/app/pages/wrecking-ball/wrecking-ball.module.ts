import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WreckingBallPageRoutingModule } from './wrecking-ball-routing.module';

import { WreckingBallPage } from './wrecking-ball.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WreckingBallPageRoutingModule
  ],
  declarations: [WreckingBallPage]
})
export class WreckingBallPageModule {}
