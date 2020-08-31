import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaticFrictionPageRoutingModule } from './static-friction-routing.module';

import { StaticFrictionPage } from './static-friction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaticFrictionPageRoutingModule
  ],
  declarations: [StaticFrictionPage]
})
export class StaticFrictionPageModule {}
