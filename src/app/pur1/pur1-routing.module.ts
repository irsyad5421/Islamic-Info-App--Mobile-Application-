import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pur1Page } from './pur1.page';

const routes: Routes = [
  {
    path: '',
    component: Pur1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pur1PageRoutingModule {}
