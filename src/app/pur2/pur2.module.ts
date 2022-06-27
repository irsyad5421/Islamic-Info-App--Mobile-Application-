import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pur2PageRoutingModule } from './pur2-routing.module';

import { Pur2Page } from './pur2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pur2PageRoutingModule
  ],
  declarations: [Pur2Page]
})
export class Pur2PageModule {}
