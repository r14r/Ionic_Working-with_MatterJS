import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MixedShapesPageRoutingModule } from './mixed-shapes-routing.module';

import { MixedShapesPage } from './mixed-shapes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MixedShapesPageRoutingModule
  ],
  declarations: [MixedShapesPage]
})
export class MixedShapesPageModule {}
