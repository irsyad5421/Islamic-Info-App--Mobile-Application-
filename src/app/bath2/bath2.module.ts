import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bath2PageRoutingModule } from './bath2-routing.module';

import { Bath2Page } from './bath2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bath2PageRoutingModule
  ],
  declarations: [Bath2Page]
})
export class Bath2PageModule {}
