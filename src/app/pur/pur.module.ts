import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurPageRoutingModule } from './pur-routing.module';

import { PurPage } from './pur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurPageRoutingModule
  ],
  declarations: [PurPage]
})
export class PurPageModule {}
