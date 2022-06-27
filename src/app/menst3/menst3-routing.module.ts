import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menst3Page } from './menst3.page';

const routes: Routes = [
  {
    path: '',
    component: Menst3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menst3PageRoutingModule {}
