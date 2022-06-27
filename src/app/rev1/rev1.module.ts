import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rev1PageRoutingModule } from './rev1-routing.module';

import { Rev1Page } from './rev1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rev1PageRoutingModule
  ],
  declarations: [Rev1Page]
})
export class Rev1PageModule {}
