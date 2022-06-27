import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bath1PageRoutingModule } from './bath1-routing.module';

import { Bath1Page } from './bath1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bath1PageRoutingModule
  ],
  declarations: [Bath1Page]
})
export class Bath1PageModule {}
