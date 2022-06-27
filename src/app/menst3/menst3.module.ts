import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menst3PageRoutingModule } from './menst3-routing.module';

import { Menst3Page } from './menst3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menst3PageRoutingModule
  ],
  declarations: [Menst3Page]
})
export class Menst3PageModule {}
