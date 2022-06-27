import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeliefPageRoutingModule } from './belief-routing.module';

import { BeliefPage } from './belief.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeliefPageRoutingModule
  ],
  declarations: [BeliefPage]
})
export class BeliefPageModule {}
