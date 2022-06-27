import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Know1PageRoutingModule } from './know1-routing.module';

import { Know1Page } from './know1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Know1PageRoutingModule
  ],
  declarations: [Know1Page]
})
export class Know1PageModule {}
