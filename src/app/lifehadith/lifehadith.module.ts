import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LifehadithPageRoutingModule } from './lifehadith-routing.module';

import { LifehadithPage } from './lifehadith.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LifehadithPageRoutingModule
  ],
  declarations: [LifehadithPage]
})
export class LifehadithPageModule {}
