import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoundedPageRoutingModule } from './rounded-routing.module';

import { RoundedPage } from './rounded.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoundedPageRoutingModule
  ],
  declarations: [RoundedPage]
})
export class RoundedPageModule {}
