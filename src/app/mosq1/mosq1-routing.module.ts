import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mosq1Page } from './mosq1.page';

const routes: Routes = [
  {
    path: '',
    component: Mosq1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mosq1PageRoutingModule {}
