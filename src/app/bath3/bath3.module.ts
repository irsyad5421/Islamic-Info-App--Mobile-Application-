import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bath3PageRoutingModule } from './bath3-routing.module';

import { Bath3Page } from './bath3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bath3PageRoutingModule
  ],
  declarations: [Bath3Page]
})
export class Bath3PageModule {}
