import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompositeManipulationPageRoutingModule } from './composite-manipulation-routing.module';

import { CompositeManipulationPage } from './composite-manipulation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompositeManipulationPageRoutingModule
  ],
  declarations: [CompositeManipulationPage]
})
export class CompositeManipulationPageModule {}
