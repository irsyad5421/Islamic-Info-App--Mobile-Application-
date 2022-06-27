import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Know4Page } from './know4.page';

const routes: Routes = [
  {
    path: '',
    component: Know4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Know4PageRoutingModule {}
