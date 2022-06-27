import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Puri1PageRoutingModule } from './puri1-routing.module';

import { Puri1Page } from './puri1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Puri1PageRoutingModule
  ],
  declarations: [Puri1Page]
})
export class Puri1PageModule {}
