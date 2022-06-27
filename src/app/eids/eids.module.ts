import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EidsPageRoutingModule } from './eids-routing.module';

import { EidsPage } from './eids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EidsPageRoutingModule
  ],
  declarations: [EidsPage]
})
export class EidsPageModule {}
