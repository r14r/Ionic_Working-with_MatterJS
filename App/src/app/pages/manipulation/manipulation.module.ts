import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManipulationPageRoutingModule } from './manipulation-routing.module';

import { ManipulationPage } from './manipulation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManipulationPageRoutingModule
  ],
  declarations: [ManipulationPage]
})
export class ManipulationPageModule {}
