import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zak4PageRoutingModule } from './zak4-routing.module';

import { Zak4Page } from './zak4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zak4PageRoutingModule
  ],
  declarations: [Zak4Page]
})
export class Zak4PageModule {}
