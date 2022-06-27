import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mosq3Page } from './mosq3.page';

const routes: Routes = [
  {
    path: '',
    component: Mosq3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mosq3PageRoutingModule {}
