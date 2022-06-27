import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pur3PageRoutingModule } from './pur3-routing.module';

import { Pur3Page } from './pur3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pur3PageRoutingModule
  ],
  declarations: [Pur3Page]
})
export class Pur3PageModule {}
