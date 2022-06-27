import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TirmidhiPageRoutingModule } from './tirmidhi-routing.module';

import { TirmidhiPage } from './tirmidhi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TirmidhiPageRoutingModule
  ],
  declarations: [TirmidhiPage]
})
export class TirmidhiPageModule {}
