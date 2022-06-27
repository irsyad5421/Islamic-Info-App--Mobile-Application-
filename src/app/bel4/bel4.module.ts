import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bel4PageRoutingModule } from './bel4-routing.module';

import { Bel4Page } from './bel4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bel4PageRoutingModule
  ],
  declarations: [Bel4Page]
})
export class Bel4PageModule {}
