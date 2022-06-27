import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurificationPageRoutingModule } from './purification-routing.module';

import { PurificationPage } from './purification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurificationPageRoutingModule
  ],
  declarations: [PurificationPage]
})
export class PurificationPageModule {}
