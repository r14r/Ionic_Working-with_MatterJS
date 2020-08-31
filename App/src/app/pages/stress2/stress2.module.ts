import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Stress2PageRoutingModule } from './stress2-routing.module';

import { Stress2Page } from './stress2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Stress2PageRoutingModule
  ],
  declarations: [Stress2Page]
})
export class Stress2PageModule {}
