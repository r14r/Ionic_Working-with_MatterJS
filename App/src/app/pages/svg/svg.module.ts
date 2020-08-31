import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SvgPageRoutingModule } from './svg-routing.module';

import { SvgPage } from './svg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SvgPageRoutingModule
  ],
  declarations: [SvgPage]
})
export class SvgPageModule {}
