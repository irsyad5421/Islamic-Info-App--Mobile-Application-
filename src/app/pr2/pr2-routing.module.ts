import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pr2Page } from './pr2.page';

const routes: Routes = [
  {
    path: '',
    component: Pr2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pr2PageRoutingModule {}
