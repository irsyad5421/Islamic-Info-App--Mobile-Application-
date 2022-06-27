import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Faith1PageRoutingModule } from './faith1-routing.module';

import { Faith1Page } from './faith1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Faith1PageRoutingModule
  ],
  declarations: [Faith1Page]
})
export class Faith1PageModule {}
