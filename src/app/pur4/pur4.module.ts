import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pur4PageRoutingModule } from './pur4-routing.module';

import { Pur4Page } from './pur4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pur4PageRoutingModule
  ],
  declarations: [Pur4Page]
})
export class Pur4PageModule {}
