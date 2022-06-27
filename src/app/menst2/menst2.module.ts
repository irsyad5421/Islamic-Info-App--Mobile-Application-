import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menst2PageRoutingModule } from './menst2-routing.module';

import { Menst2Page } from './menst2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menst2PageRoutingModule
  ],
  declarations: [Menst2Page]
})
export class Menst2PageModule {}
