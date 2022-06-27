import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pray1PageRoutingModule } from './pray1-routing.module';

import { Pray1Page } from './pray1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pray1PageRoutingModule
  ],
  declarations: [Pray1Page]
})
export class Pray1PageModule {}
