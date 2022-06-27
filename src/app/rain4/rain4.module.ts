import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rain4PageRoutingModule } from './rain4-routing.module';

import { Rain4Page } from './rain4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rain4PageRoutingModule
  ],
  declarations: [Rain4Page]
})
export class Rain4PageModule {}
