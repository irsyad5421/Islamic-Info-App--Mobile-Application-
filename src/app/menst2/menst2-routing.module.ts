import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menst2Page } from './menst2.page';

const routes: Routes = [
  {
    path: '',
    component: Menst2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menst2PageRoutingModule {}
