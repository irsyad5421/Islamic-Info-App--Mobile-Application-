import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bel2PageRoutingModule } from './bel2-routing.module';

import { Bel2Page } from './bel2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bel2PageRoutingModule
  ],
  declarations: [Bel2Page]
})
export class Bel2PageModule {}
