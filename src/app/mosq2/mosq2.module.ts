import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mosq2PageRoutingModule } from './mosq2-routing.module';

import { Mosq2Page } from './mosq2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mosq2PageRoutingModule
  ],
  declarations: [Mosq2Page]
})
export class Mosq2PageModule {}
