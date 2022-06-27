import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AblutionPageRoutingModule } from './ablution-routing.module';

import { AblutionPage } from './ablution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AblutionPageRoutingModule
  ],
  declarations: [AblutionPage]
})
export class AblutionPageModule {}
