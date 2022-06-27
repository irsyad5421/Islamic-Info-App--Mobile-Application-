import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuslimPageRoutingModule } from './muslim-routing.module';

import { MuslimPage } from './muslim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuslimPageRoutingModule
  ],
  declarations: [MuslimPage]
})
export class MuslimPageModule {}
