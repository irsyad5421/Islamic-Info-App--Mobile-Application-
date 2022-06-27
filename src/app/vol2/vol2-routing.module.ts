import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vol2Page } from './vol2.page';

const routes: Routes = [
  {
    path: '',
    component: Vol2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vol2PageRoutingModule {}
