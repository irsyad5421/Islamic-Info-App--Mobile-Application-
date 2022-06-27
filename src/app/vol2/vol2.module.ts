import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vol2PageRoutingModule } from './vol2-routing.module';

import { Vol2Page } from './vol2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vol2PageRoutingModule
  ],
  declarations: [Vol2Page]
})
export class Vol2PageModule {}
