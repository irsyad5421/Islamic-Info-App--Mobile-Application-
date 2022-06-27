import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menst4PageRoutingModule } from './menst4-routing.module';

import { Menst4Page } from './menst4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menst4PageRoutingModule
  ],
  declarations: [Menst4Page]
})
export class Menst4PageModule {}
