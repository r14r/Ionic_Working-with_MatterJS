import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatapultPageRoutingModule } from './catapult-routing.module';

import { CatapultPage } from './catapult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatapultPageRoutingModule
  ],
  declarations: [CatapultPage]
})
export class CatapultPageModule {}
