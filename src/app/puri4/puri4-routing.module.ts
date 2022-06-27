import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Puri4Page } from './puri4.page';

const routes: Routes = [
  {
    path: '',
    component: Puri4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Puri4PageRoutingModule {}
