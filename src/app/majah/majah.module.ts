import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MajahPageRoutingModule } from './majah-routing.module';

import { MajahPage } from './majah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MajahPageRoutingModule
  ],
  declarations: [MajahPage]
})
export class MajahPageModule {}
