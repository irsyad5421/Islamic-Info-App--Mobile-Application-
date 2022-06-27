import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenstruationPageRoutingModule } from './menstruation-routing.module';

import { MenstruationPage } from './menstruation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenstruationPageRoutingModule
  ],
  declarations: [MenstruationPage]
})
export class MenstruationPageModule {}
