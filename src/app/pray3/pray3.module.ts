import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pray3PageRoutingModule } from './pray3-routing.module';

import { Pray3Page } from './pray3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pray3PageRoutingModule
  ],
  declarations: [Pray3Page]
})
export class Pray3PageModule {}
