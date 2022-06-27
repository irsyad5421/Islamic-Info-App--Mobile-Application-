import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bel1PageRoutingModule } from './bel1-routing.module';

import { Bel1Page } from './bel1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bel1PageRoutingModule
  ],
  declarations: [Bel1Page]
})
export class Bel1PageModule {}
