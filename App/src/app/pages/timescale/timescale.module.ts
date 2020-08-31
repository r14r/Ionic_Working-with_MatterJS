import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimescalePageRoutingModule } from './timescale-routing.module';

import { TimescalePage } from './timescale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimescalePageRoutingModule
  ],
  declarations: [TimescalePage]
})
export class TimescalePageModule {}
