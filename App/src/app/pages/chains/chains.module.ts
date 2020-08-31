import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChainsPageRoutingModule } from './chains-routing.module';

import { ChainsPage } from './chains.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChainsPageRoutingModule
  ],
  declarations: [ChainsPage]
})
export class ChainsPageModule {}
