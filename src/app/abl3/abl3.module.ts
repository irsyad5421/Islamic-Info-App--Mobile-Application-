import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abl3PageRoutingModule } from './abl3-routing.module';

import { Abl3Page } from './abl3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abl3PageRoutingModule
  ],
  declarations: [Abl3Page]
})
export class Abl3PageModule {}
