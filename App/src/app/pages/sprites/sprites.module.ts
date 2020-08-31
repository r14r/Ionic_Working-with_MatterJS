import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpritesPageRoutingModule } from './sprites-routing.module';

import { SpritesPage } from './sprites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpritesPageRoutingModule
  ],
  declarations: [SpritesPage]
})
export class SpritesPageModule {}
