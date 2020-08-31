import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoftBodyPageRoutingModule } from './soft-body-routing.module';

import { SoftBodyPage } from './soft-body.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoftBodyPageRoutingModule
  ],
  declarations: [SoftBodyPage]
})
export class SoftBodyPageModule {}
