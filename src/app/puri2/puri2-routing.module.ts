import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Puri2Page } from './puri2.page';

const routes: Routes = [
  {
    path: '',
    component: Puri2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Puri2PageRoutingModule {}
