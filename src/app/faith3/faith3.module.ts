import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Faith3PageRoutingModule } from './faith3-routing.module';

import { Faith3Page } from './faith3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Faith3PageRoutingModule
  ],
  declarations: [Faith3Page]
})
export class Faith3PageModule {}
