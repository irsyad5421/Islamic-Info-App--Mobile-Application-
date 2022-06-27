import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abl2PageRoutingModule } from './abl2-routing.module';

import { Abl2Page } from './abl2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abl2PageRoutingModule
  ],
  declarations: [Abl2Page]
})
export class Abl2PageModule {}
