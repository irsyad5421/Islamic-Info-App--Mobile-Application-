import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WitrPageRoutingModule } from './witr-routing.module';

import { WitrPage } from './witr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WitrPageRoutingModule
  ],
  declarations: [WitrPage]
})
export class WitrPageModule {}
