import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Puri4PageRoutingModule } from './puri4-routing.module';

import { Puri4Page } from './puri4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Puri4PageRoutingModule
  ],
  declarations: [Puri4Page]
})
export class Puri4PageModule {}
