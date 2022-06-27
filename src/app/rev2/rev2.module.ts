import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rev2PageRoutingModule } from './rev2-routing.module';

import { Rev2Page } from './rev2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rev2PageRoutingModule
  ],
  declarations: [Rev2Page]
})
export class Rev2PageModule {}
