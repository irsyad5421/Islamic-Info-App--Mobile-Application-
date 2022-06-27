import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rain2PageRoutingModule } from './rain2-routing.module';

import { Rain2Page } from './rain2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rain2PageRoutingModule
  ],
  declarations: [Rain2Page]
})
export class Rain2PageModule {}
