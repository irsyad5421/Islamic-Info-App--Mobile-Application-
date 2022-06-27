import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menst1PageRoutingModule } from './menst1-routing.module';

import { Menst1Page } from './menst1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menst1PageRoutingModule
  ],
  declarations: [Menst1Page]
})
export class Menst1PageModule {}
