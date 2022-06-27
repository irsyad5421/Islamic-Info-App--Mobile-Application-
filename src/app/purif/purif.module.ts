import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurifPageRoutingModule } from './purif-routing.module';

import { PurifPage } from './purif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurifPageRoutingModule
  ],
  declarations: [PurifPage]
})
export class PurifPageModule {}
