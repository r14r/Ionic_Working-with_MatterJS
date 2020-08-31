import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GyroPageRoutingModule } from './gyro-routing.module';

import { GyroPage } from './gyro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GyroPageRoutingModule
  ],
  declarations: [GyroPage]
})
export class GyroPageModule {}
