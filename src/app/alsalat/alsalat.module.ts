import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlsalatPageRoutingModule } from './alsalat-routing.module';

import { AlsalatPage } from './alsalat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlsalatPageRoutingModule
  ],
  declarations: [AlsalatPage]
})
export class AlsalatPageModule {}
