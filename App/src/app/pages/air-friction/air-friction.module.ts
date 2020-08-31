import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirFrictionPageRoutingModule } from './air-friction-routing.module';

import { AirFrictionPage } from './air-friction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirFrictionPageRoutingModule
  ],
  declarations: [AirFrictionPage]
})
export class AirFrictionPageModule {}
