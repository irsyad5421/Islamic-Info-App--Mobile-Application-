import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalatPageRoutingModule } from './salat-routing.module';

import { SalatPage } from './salat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalatPageRoutingModule
  ],
  declarations: [SalatPage]
})
export class SalatPageModule {}
