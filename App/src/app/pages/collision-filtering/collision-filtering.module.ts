import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollisionFilteringPageRoutingModule } from './collision-filtering-routing.module';

import { CollisionFilteringPage } from './collision-filtering.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollisionFilteringPageRoutingModule
  ],
  declarations: [CollisionFilteringPage]
})
export class CollisionFilteringPageModule {}
