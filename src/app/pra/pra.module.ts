import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PraPageRoutingModule } from './pra-routing.module';

import { PraPage } from './pra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PraPageRoutingModule
  ],
  declarations: [PraPage]
})
export class PraPageModule {}
