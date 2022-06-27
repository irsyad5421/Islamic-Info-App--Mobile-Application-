import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bath4PageRoutingModule } from './bath4-routing.module';

import { Bath4Page } from './bath4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bath4PageRoutingModule
  ],
  declarations: [Bath4Page]
})
export class Bath4PageModule {}
