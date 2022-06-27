import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rain1PageRoutingModule } from './rain1-routing.module';

import { Rain1Page } from './rain1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rain1PageRoutingModule
  ],
  declarations: [Rain1Page]
})
export class Rain1PageModule {}
