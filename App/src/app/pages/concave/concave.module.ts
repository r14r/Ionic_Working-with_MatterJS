import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcavePageRoutingModule } from './concave-routing.module';

import { ConcavePage } from './concave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcavePageRoutingModule
  ],
  declarations: [ConcavePage]
})
export class ConcavePageModule {}
