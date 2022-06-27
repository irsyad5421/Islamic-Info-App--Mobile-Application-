import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MannerPageRoutingModule } from './manner-routing.module';

import { MannerPage } from './manner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MannerPageRoutingModule
  ],
  declarations: [MannerPage]
})
export class MannerPageModule {}
