import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vol1Page } from './vol1.page';

const routes: Routes = [
  {
    path: '',
    component: Vol1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vol1PageRoutingModule {}
