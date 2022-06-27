import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vol4Page } from './vol4.page';

const routes: Routes = [
  {
    path: '',
    component: Vol4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vol4PageRoutingModule {}
