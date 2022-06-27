import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menst1Page } from './menst1.page';

const routes: Routes = [
  {
    path: '',
    component: Menst1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menst1PageRoutingModule {}
