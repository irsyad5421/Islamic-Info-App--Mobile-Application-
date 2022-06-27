import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zak3PageRoutingModule } from './zak3-routing.module';

import { Zak3Page } from './zak3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zak3PageRoutingModule
  ],
  declarations: [Zak3Page]
})
export class Zak3PageModule {}
