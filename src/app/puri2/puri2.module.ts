import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Puri2PageRoutingModule } from './puri2-routing.module';

import { Puri2Page } from './puri2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Puri2PageRoutingModule
  ],
  declarations: [Puri2Page]
})
export class Puri2PageModule {}
