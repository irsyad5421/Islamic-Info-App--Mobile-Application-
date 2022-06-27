import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bel1Page } from './bel1.page';

const routes: Routes = [
  {
    path: '',
    component: Bel1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bel1PageRoutingModule {}
