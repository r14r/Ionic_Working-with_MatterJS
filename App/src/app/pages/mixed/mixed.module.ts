import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MixedPageRoutingModule } from './mixed-routing.module';

import { MixedPage } from './mixed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MixedPageRoutingModule
  ],
  declarations: [MixedPage]
})
export class MixedPageModule {}
