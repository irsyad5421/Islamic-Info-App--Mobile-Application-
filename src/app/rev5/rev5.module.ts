import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rev5PageRoutingModule } from './rev5-routing.module';

import { Rev5Page } from './rev5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rev5PageRoutingModule
  ],
  declarations: [Rev5Page]
})
export class Rev5PageModule {}
