import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompoundStackPageRoutingModule } from './compound-stack-routing.module';

import { CompoundStackPage } from './compound-stack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompoundStackPageRoutingModule
  ],
  declarations: [CompoundStackPage]
})
export class CompoundStackPageModule {}
