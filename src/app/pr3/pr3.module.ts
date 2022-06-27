import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pr3PageRoutingModule } from './pr3-routing.module';

import { Pr3Page } from './pr3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pr3PageRoutingModule
  ],
  declarations: [Pr3Page]
})
export class Pr3PageModule {}
