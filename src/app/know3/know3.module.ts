import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Know3PageRoutingModule } from './know3-routing.module';

import { Know3Page } from './know3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Know3PageRoutingModule
  ],
  declarations: [Know3Page]
})
export class Know3PageModule {}
