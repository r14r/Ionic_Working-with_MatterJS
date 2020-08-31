import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinimalPageRoutingModule } from './minimal-routing.module';

import { MinimalPage } from './minimal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinimalPageRoutingModule
  ],
  declarations: [MinimalPage]
})
export class MinimalPageModule {}
