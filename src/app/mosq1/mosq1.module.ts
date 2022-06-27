import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mosq1PageRoutingModule } from './mosq1-routing.module';

import { Mosq1Page } from './mosq1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mosq1PageRoutingModule
  ],
  declarations: [Mosq1Page]
})
export class Mosq1PageModule {}
