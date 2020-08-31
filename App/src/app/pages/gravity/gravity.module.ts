import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GravityPageRoutingModule } from './gravity-routing.module';

import { GravityPage } from './gravity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GravityPageRoutingModule
  ],
  declarations: [GravityPage]
})
export class GravityPageModule {}
