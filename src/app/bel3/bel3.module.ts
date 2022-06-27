import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bel3PageRoutingModule } from './bel3-routing.module';

import { Bel3Page } from './bel3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bel3PageRoutingModule
  ],
  declarations: [Bel3Page]
})
export class Bel3PageModule {}
