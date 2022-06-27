import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mosq3PageRoutingModule } from './mosq3-routing.module';

import { Mosq3Page } from './mosq3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mosq3PageRoutingModule
  ],
  declarations: [Mosq3Page]
})
export class Mosq3PageModule {}
