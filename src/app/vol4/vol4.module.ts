import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vol4PageRoutingModule } from './vol4-routing.module';

import { Vol4Page } from './vol4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vol4PageRoutingModule
  ],
  declarations: [Vol4Page]
})
export class Vol4PageModule {}
