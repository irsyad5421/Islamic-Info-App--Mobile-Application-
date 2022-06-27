import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pr1Page } from './pr1.page';

const routes: Routes = [
  {
    path: '',
    component: Pr1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pr1PageRoutingModule {}
