import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaithPageRoutingModule } from './faith-routing.module';

import { FaithPage } from './faith.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaithPageRoutingModule
  ],
  declarations: [FaithPage]
})
export class FaithPageModule {}
