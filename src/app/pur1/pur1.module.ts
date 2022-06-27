import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pur1PageRoutingModule } from './pur1-routing.module';

import { Pur1Page } from './pur1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pur1PageRoutingModule
  ],
  declarations: [Pur1Page]
})
export class Pur1PageModule {}
