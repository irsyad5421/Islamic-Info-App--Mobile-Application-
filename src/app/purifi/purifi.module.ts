import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurifiPageRoutingModule } from './purifi-routing.module';

import { PurifiPage } from './purifi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurifiPageRoutingModule
  ],
  declarations: [PurifiPage]
})
export class PurifiPageModule {}
