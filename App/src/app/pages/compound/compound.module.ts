import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompoundPageRoutingModule } from './compound-routing.module';

import { CompoundPage } from './compound.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		CompoundPageRoutingModule
	],
	declarations: [CompoundPage]
})
export class CompoundPageModule { }
