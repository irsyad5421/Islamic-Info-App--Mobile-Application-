import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Faith4PageRoutingModule } from './faith4-routing.module';

import { Faith4Page } from './faith4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Faith4PageRoutingModule
  ],
  declarations: [Faith4Page]
})
export class Faith4PageModule {}
