import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abl1PageRoutingModule } from './abl1-routing.module';

import { Abl1Page } from './abl1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abl1PageRoutingModule
  ],
  declarations: [Abl1Page]
})
export class Abl1PageModule {}
