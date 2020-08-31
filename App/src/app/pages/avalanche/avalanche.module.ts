import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvalanchePageRoutingModule } from './avalanche-routing.module';

import { AvalanchePage } from './avalanche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvalanchePageRoutingModule
  ],
  declarations: [AvalanchePage]
})
export class AvalanchePageModule {}
