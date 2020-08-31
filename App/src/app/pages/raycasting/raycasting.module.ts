import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaycastingPageRoutingModule } from './raycasting-routing.module';

import { RaycastingPage } from './raycasting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaycastingPageRoutingModule
  ],
  declarations: [RaycastingPage]
})
export class RaycastingPageModule {}
