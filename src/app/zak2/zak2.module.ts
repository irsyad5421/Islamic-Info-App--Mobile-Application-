import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zak2PageRoutingModule } from './zak2-routing.module';

import { Zak2Page } from './zak2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zak2PageRoutingModule
  ],
  declarations: [Zak2Page]
})
export class Zak2PageModule {}
