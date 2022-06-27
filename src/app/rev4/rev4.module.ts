import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rev4PageRoutingModule } from './rev4-routing.module';

import { Rev4Page } from './rev4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rev4PageRoutingModule
  ],
  declarations: [Rev4Page]
})
export class Rev4PageModule {}
