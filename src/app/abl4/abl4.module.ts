import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abl4PageRoutingModule } from './abl4-routing.module';

import { Abl4Page } from './abl4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abl4PageRoutingModule
  ],
  declarations: [Abl4Page]
})
export class Abl4PageModule {}
