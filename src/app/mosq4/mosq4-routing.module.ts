import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mosq4Page } from './mosq4.page';

const routes: Routes = [
  {
    path: '',
    component: Mosq4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mosq4PageRoutingModule {}
