import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pr4Page } from './pr4.page';

const routes: Routes = [
  {
    path: '',
    component: Pr4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pr4PageRoutingModule {}
