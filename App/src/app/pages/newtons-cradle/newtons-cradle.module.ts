import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewtonsCradlePageRoutingModule } from './newtons-cradle-routing.module';

import { NewtonsCradlePage } from './newtons-cradle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewtonsCradlePageRoutingModule
  ],
  declarations: [NewtonsCradlePage]
})
export class NewtonsCradlePageModule {}
