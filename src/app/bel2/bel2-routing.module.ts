import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bel2Page } from './bel2.page';

const routes: Routes = [
  {
    path: '',
    component: Bel2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bel2PageRoutingModule {}
