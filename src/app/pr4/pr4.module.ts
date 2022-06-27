import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pr4PageRoutingModule } from './pr4-routing.module';

import { Pr4Page } from './pr4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pr4PageRoutingModule
  ],
  declarations: [Pr4Page]
})
export class Pr4PageModule {}
