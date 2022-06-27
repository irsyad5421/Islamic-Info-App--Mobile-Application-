import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rain3PageRoutingModule } from './rain3-routing.module';

import { Rain3Page } from './rain3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rain3PageRoutingModule
  ],
  declarations: [Rain3Page]
})
export class Rain3PageModule {}
