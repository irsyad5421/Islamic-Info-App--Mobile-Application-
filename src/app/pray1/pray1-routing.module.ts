import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pray1Page } from './pray1.page';

const routes: Routes = [
  {
    path: '',
    component: Pray1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pray1PageRoutingModule {}
