import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BroadphasePageRoutingModule } from './broadphase-routing.module';

import { BroadphasePage } from './broadphase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BroadphasePageRoutingModule
  ],
  declarations: [BroadphasePage]
})
export class BroadphasePageModule {}
