import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MosquesPageRoutingModule } from './mosques-routing.module';

import { MosquesPage } from './mosques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MosquesPageRoutingModule
  ],
  declarations: [MosquesPage]
})
export class MosquesPageModule {}
