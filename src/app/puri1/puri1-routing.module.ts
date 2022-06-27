import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Puri1Page } from './puri1.page';

const routes: Routes = [
  {
    path: '',
    component: Puri1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Puri1PageRoutingModule {}
