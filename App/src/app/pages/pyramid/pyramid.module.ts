import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyramidPageRoutingModule } from './pyramid-routing.module';

import { PyramidPage } from './pyramid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyramidPageRoutingModule
  ],
  declarations: [PyramidPage]
})
export class PyramidPageModule {}
