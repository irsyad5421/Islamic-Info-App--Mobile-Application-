import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pr2PageRoutingModule } from './pr2-routing.module';

import { Pr2Page } from './pr2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pr2PageRoutingModule
  ],
  declarations: [Pr2Page]
})
export class Pr2PageModule {}
