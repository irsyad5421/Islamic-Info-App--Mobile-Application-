import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MosqPageRoutingModule } from './mosq-routing.module';

import { MosqPage } from './mosq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MosqPageRoutingModule
  ],
  declarations: [MosqPage]
})
export class MosqPageModule {}
