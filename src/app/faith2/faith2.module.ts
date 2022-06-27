import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Faith2PageRoutingModule } from './faith2-routing.module';

import { Faith2Page } from './faith2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Faith2PageRoutingModule
  ],
  declarations: [Faith2Page]
})
export class Faith2PageModule {}
