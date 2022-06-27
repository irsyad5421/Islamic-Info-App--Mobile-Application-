import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pur4Page } from './pur4.page';

const routes: Routes = [
  {
    path: '',
    component: Pur4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pur4PageRoutingModule {}
