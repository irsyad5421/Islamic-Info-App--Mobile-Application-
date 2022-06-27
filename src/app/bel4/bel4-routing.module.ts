import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bel4Page } from './bel4.page';

const routes: Routes = [
  {
    path: '',
    component: Bel4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bel4PageRoutingModule {}
