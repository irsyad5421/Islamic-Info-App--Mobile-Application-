import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pray4PageRoutingModule } from './pray4-routing.module';

import { Pray4Page } from './pray4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pray4PageRoutingModule
  ],
  declarations: [Pray4Page]
})
export class Pray4PageModule {}
