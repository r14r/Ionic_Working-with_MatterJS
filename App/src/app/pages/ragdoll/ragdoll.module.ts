import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RagdollPageRoutingModule } from './ragdoll-routing.module';

import { RagdollPage } from './ragdoll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RagdollPageRoutingModule
  ],
  declarations: [RagdollPage]
})
export class RagdollPageModule {}
