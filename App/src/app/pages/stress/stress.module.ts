import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StressPageRoutingModule } from './stress-routing.module';

import { StressPage } from './stress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StressPageRoutingModule
  ],
  declarations: [StressPage]
})
export class StressPageModule {}
