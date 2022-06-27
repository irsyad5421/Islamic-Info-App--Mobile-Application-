import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Know4PageRoutingModule } from './know4-routing.module';

import { Know4Page } from './know4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Know4PageRoutingModule
  ],
  declarations: [Know4Page]
})
export class Know4PageModule {}
