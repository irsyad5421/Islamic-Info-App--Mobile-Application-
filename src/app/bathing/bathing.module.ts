import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BathingPageRoutingModule } from './bathing-routing.module';

import { BathingPage } from './bathing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BathingPageRoutingModule
  ],
  declarations: [BathingPage]
})
export class BathingPageModule {}
