import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mosq4PageRoutingModule } from './mosq4-routing.module';

import { Mosq4Page } from './mosq4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mosq4PageRoutingModule
  ],
  declarations: [Mosq4Page]
})
export class Mosq4PageModule {}
