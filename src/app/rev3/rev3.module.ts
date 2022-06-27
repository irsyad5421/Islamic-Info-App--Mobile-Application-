import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rev3PageRoutingModule } from './rev3-routing.module';

import { Rev3Page } from './rev3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rev3PageRoutingModule
  ],
  declarations: [Rev3Page]
})
export class Rev3PageModule {}
