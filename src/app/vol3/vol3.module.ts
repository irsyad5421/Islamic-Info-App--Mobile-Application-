import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vol3PageRoutingModule } from './vol3-routing.module';

import { Vol3Page } from './vol3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vol3PageRoutingModule
  ],
  declarations: [Vol3Page]
})
export class Vol3PageModule {}
