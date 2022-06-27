import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pray2PageRoutingModule } from './pray2-routing.module';

import { Pray2Page } from './pray2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pray2PageRoutingModule
  ],
  declarations: [Pray2Page]
})
export class Pray2PageModule {}
