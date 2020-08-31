import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrictionPageRoutingModule } from './friction-routing.module';

import { FrictionPage } from './friction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrictionPageRoutingModule
  ],
  declarations: [FrictionPage]
})
export class FrictionPageModule {}
