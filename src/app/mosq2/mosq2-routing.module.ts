import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mosq2Page } from './mosq2.page';

const routes: Routes = [
  {
    path: '',
    component: Mosq2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mosq2PageRoutingModule {}
