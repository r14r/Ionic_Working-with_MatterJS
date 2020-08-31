import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestitutionPageRoutingModule } from './restitution-routing.module';

import { RestitutionPage } from './restitution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestitutionPageRoutingModule
  ],
  declarations: [RestitutionPage]
})
export class RestitutionPageModule {}
