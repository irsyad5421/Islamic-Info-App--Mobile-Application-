import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zak1PageRoutingModule } from './zak1-routing.module';

import { Zak1Page } from './zak1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zak1PageRoutingModule
  ],
  declarations: [Zak1Page]
})
export class Zak1PageModule {}
