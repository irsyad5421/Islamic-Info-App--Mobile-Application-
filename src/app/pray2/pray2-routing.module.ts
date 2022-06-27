import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pray2Page } from './pray2.page';

const routes: Routes = [
  {
    path: '',
    component: Pray2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pray2PageRoutingModule {}
