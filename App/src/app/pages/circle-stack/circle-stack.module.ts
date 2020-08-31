import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircleStackPageRoutingModule } from './circle-stack-routing.module';

import { CircleStackPage } from './circle-stack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircleStackPageRoutingModule
  ],
  declarations: [CircleStackPage]
})
export class CircleStackPageModule {}
