import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Puri3PageRoutingModule } from './puri3-routing.module';

import { Puri3Page } from './puri3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Puri3PageRoutingModule
  ],
  declarations: [Puri3Page]
})
export class Puri3PageModule {}
