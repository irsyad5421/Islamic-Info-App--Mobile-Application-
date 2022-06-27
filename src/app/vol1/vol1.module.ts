import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vol1PageRoutingModule } from './vol1-routing.module';

import { Vol1Page } from './vol1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vol1PageRoutingModule
  ],
  declarations: [Vol1Page]
})
export class Vol1PageModule {}
