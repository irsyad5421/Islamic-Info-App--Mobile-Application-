import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menst4Page } from './menst4.page';

const routes: Routes = [
  {
    path: '',
    component: Menst4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menst4PageRoutingModule {}
