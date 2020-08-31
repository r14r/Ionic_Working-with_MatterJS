import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepingPageRoutingModule } from './sleeping-routing.module';

import { SleepingPage } from './sleeping.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepingPageRoutingModule
  ],
  declarations: [SleepingPage]
})
export class SleepingPageModule {}
